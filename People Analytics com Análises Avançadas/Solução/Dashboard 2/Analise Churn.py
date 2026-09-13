#!/usr/bin/env python
# coding: utf-8

# # Analise Churn de Empregados
# 
# 
# 

# ### Esse notebook será um passo a passo simples e objetivo de como estimar a probabilidade de um empregado deixar a empresa;
# 
# ### O dataset utilizado será disponibilizado junto com o arquivo do código;
# 
# ### O modelo de machine learning utilizado foi o Classificador por Random Forest Classifier
# 

# ### As bibliotecas utilizadas foram: 
#     
# #### Pandas:
# #### https://pandas.pydata.org/docs/
#     
# #### Numpy:
# #### https://numpy.org/doc/stable/
#     
# #### Scikit-Learn:
# #### https://scikit-learn.org/stable/
# 
# #### Matplotlib
# #### https://matplotlib.org/
# 
# 

# # Analise Exploratória de Dados (EDA)
# 
#     

# ### Random forest is a type of supervised machine learning algorithm based on ensemble learning. Ensemble learning is a type of learning where you join different types of algorithms or same algorithm multiple times to form a more powerful prediction model. The random forest algorithm combines multiple algorithm of the same type i.e. multiple decision trees, resulting in a forest of trees, hence the name "Random Forest". The random forest algorithm can be used for both regression and classification tasks.
# 
# ### Floresta aleatória é um tipo de algoritmo de aprendizado de máquina supervisionado baseado no aprendizado de conjunto. A aprendizagem por conjunto é um tipo de aprendizagem em que você junta diferentes tipos de algoritmos ou o mesmo algoritmo várias vezes para formar um modelo de previsão mais poderoso. O algoritmo de floresta aleatória combina vários algoritmos do mesmo tipo, ou seja, várias árvores de decisão, resultando em uma floresta de árvores, daí o nome "Floresta aleatória". O algoritmo de floresta aleatório pode ser usado para tarefas de regressão e classificação.

# In[134]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
get_ipython().run_line_magic('matplotlib', 'inline')


# ### Importa o DataFrame, base de dados.

# In[138]:


dataset = pd.read_csv('DataSet.csv')

dataset.head()
#Primeiras 5 linhas do dataframe
#dataset_ = dataset.copy()


# ### Qualidade dos Dados

# In[3]:


# Informação sobre a base de dados: 

# Tipo dos dados, null values

dataset.info()


# In[4]:


dataset.describe()


# In[5]:


#Se existir null values posso quantifica-los

dataset.isnull().sum()


# ### Características Numéricas

# In[6]:


dataset.hist(figsize=(15,10), xrot=-45)
plt.show()


# In[7]:


plt.figure(figsize=(15, 10))
sns.heatmap(dataset.corr(), 
    annot=True,
    cmap='RdBu_r',
    vmin=-1,
    vmax=1)
plt.show()


# ### Características Categoricas

# In[8]:


plt.figure(figsize=(10, 8))

for feature in dataset.dtypes[dataset.dtypes=='object'].index:
    
    sns.countplot(data=dataset, y='{}'.format(feature))
    
    plt.show()


# ### Transformação de valores categoricos

# In[9]:


#Valores categoricos

print(dataset['department'].unique(), '\n')
print(dataset['salary'].unique())


# In[10]:


#Transforma os valores categoricos em numericos
dataset = pd.get_dummies(dataset, columns=['department', 'salary'], drop_first = True)


# In[11]:


#Novo DataFrame
dataset.head()


# ### Segmentação dos dados
# 
# #### Extrair insights segmentando caracteristicas numericas contra categoricas

# In[12]:


#Índice de Satisfação

sns.violinplot(y='satisfaction', x='churn', data=dataset)

plt.show()


# In[13]:


#Índice de avaliação

sns.violinplot(y='evaluation', x='churn', data=dataset)

plt.show()


# In[14]:


#Tempo de empresa

sns.violinplot(y='time_spend_company', x='churn', data=dataset)

plt.show()


# # Feature Engineering
# 
# ### Clustering para extrair insight através de grupos similares

# #### Performance e Satisfação:

# In[15]:


plt.figure(figsize=(15, 15))

sns.lmplot(x='satisfaction',
          y='evaluation',
          data=dataset[dataset.churn==1],
          fit_reg=False
         )

plt.show()

#Baixa performance: evaluation < 0.6
#Desmotivados: satisfaction < 0.2
#Exemplares: evaluation > 0.8 and satisfaction > 0.7


# In[16]:


#Categorias

df = dataset.copy()

df['status'] = np.where(
                    df['satisfaction'] < 0.2, 'Desmotivado', 
                        (
                            np.where(
                                df['evaluation'] < 0.6, 'Baixa Perfomance',
                               (
                                   np.where(
                                       (df['evaluation'] > 0.8) & (df['satisfaction'] > 0.7), 'Exemplares',""
                                   )
                                )
                            )
                        )
                    )

df.head()


# In[17]:


#Clustering por evaluation e satisfaction

plt.figure(figsize=(15, 15))

sns.lmplot(x='satisfaction',
          y='evaluation',
          hue='status',
          data=df[df.churn==1],
          fit_reg=False
         )

plt.show()


# In[18]:


# Outra maneira de criar categorias

df['baixa performance'] = (df.evaluation < 0.6).astype(int)
df['desmotivado'] = (df.satisfaction < 0.2).astype(int)
df['exemplar'] = ((df.evaluation > 0.8) & (df.satisfaction > 0.7)).astype(int)


df.head()


# In[19]:


df[['baixa performance','desmotivado','exemplar']].mean()


# ##### 31% dos empregados que saíram tinham baixa performance

# # Treinamento do Modelo

# ### Preparar os dados para treino

# In[20]:


X = dataset.drop('churn',axis=1)
y = dataset.churn


# ### Dividir os dados em treino e teste

# In[21]:


from sklearn.model_selection import train_test_split


# In[22]:


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=123, stratify=df.churn)


# ### Pipelines para criar passos de processamento

# In[23]:


from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import make_pipeline


# #### The purpose of the pipeline is to assemble several steps that can be cross-validated together while setting different parameters.

# In[24]:


rf_classifier = RandomForestClassifier(class_weight = "balanced",
                                       random_state=7)


# #### Hiperparâmetros 

# In[25]:


param_grid = {'n_estimators': [100, 200],
              'max_features': ['auto', 'sqrt', 0.33],
              'min_samples_leaf': [1, 3, 5, 10]}


# In[26]:


from sklearn.model_selection import GridSearchCV


# In[27]:


grid_obj = GridSearchCV(rf_classifier,
                        param_grid=param_grid,
                        cv=5)


# In[28]:


get_ipython().run_cell_magic('time', '', 'grid_fit = grid_obj.fit(X_train, y_train)')


# In[46]:


#Essa é a performance média atingida pela validação cruzada (CV) dos dados de treino, procedimento 
#de reamostragem usado para avaliar modelos de ML  

RandomForestEstimators = grid_fit.best_estimator_ 

print(grid_obj.best_estimator_)
print(grid_obj.best_params_)
print(grid_obj.best_score_) #Média de performance treino


# ### Predições

# In[53]:


y_pred = grid_obj.predict(X_test)
print(y_pred)


# In[30]:







# from sklearn.model_selection import GridSearchCV
# from sklearn.metrics import confusion_matrix, accuracy_score,
#                             f1_score, roc_curve, roc_auc_score



# from sklearn.preprocessing import StandardScaler


# sc = StandardScaler()
# X_train = sc.fit_transform(X_train)
# X_test = sc.transform(X_test)


# In[ ]:





# In[ ]:


O ROC possui dois parâmetros:
Taxa de verdadeiro positivo (True Positive Rate), que é dado por true positives / (true positives + false negatives)
Taxa de falso positivo (False Positive Rate), que é dado por false positives / (false positives + true negatives)


# # Avaliação de Performance

# In[89]:


from sklearn.metrics import confusion_matrix, classification_report, accuracy_score, f1_score, roc_curve, roc_auc_score


# ### Accuracy

# In[ ]:


#https://medium.com/@kohlishivam5522/understanding-a-classification-report-for-your-machine-learning-model-88815e2ce397
#https://pt.wikipedia.org/wiki/Precis%C3%A3o_e_revoca%C3%A7%C3%A3o#:~:text=Tanto%20precis%C3%A3o%20quanto%20revoca%C3%A7%C3%A3o%20(ou,compreens%C3%A3o%20da%20medida%20de%20relev%C3%A2ncia.&text=Precis%C3%A3o%20pode%20ser%20traduzida%20como,medida%20de%20completude%20ou%20quantidade.


# #### Quantidade de predições corretas / Número Total de predições
# 
# #### TP + TN / TP + TN + FP + FN
# 
# #### TN / True Negative: O caso foi negativo e o previsto foi negativo
# #### TP / True Positive: O caso foi positivo e o previsto foi positivo
# #### FN / False Negative: O caso foi positivo mas foi previsto negativo
# #### FP / False Positive: O caso foi negativo mas foi previsto positivo

# In[60]:


print('Accuracy:', accuracy_score(y_test, y_pred))


# ### Confusion Matrix

# In[82]:


cnf_matrix = confusion_matrix(y_test, y_pred)

fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot()

sns.heatmap(pd.DataFrame(cnf_matrix), annot=True, cmap="YlGnBu" ,fmt='g')
ax.xaxis.set_label_position("top")
plt.tight_layout()
plt.title('Confusion matrix', y=1.1)
plt.ylabel('Actual label')
plt.xlabel('Predicted label')


plt.show()


# ### Precision
# #### Precision é a habilidade de um classificador não classificar positivamente algo que é na verdade é negativo. 
# #### Em outras palavras é a acurácia das predições positivas, ou quantos elementos selecionados são relevantes?

# In[92]:


#Precision = TP/(TP + FP)

precision = cnf_matrix[1][1]/(cnf_matrix[0][1] + cnf_matrix[1][1])
print(precision)


# ### Recall
# #### Recall é a habilidade do classificador achar todos os positivos.
# #### Em outras palavras é a fração de positivos que foram corretamente classificados, ou quantos elementos relevantes foram selecionados?

# In[94]:


#Recall = TP/(TP+FN)

recall = cnf_matrix[1][1]/(cnf_matrix[1][0] + cnf_matrix[1][1])
print(recall)


# ### F1-score
# #### F1-score é a média harmônica de precision e recall. Deve ser usada para comparar modelos de classificação e não acurácia global

# In[95]:


#F1 Score = 2*(Recall * Precision) / (Recall + Precision)

F1_score = f1_score(y_test, y_pred) 
F1_score


# ### Support 
# #### Support é o número de ocorrências reais de uma determinada classe 

# In[91]:


print(classification_report(y_test,y_pred))


# In[142]:


#Probabilidades

pred_proba = grid_obj.predict_proba(X_test)


#Probabilidade de sair da empresa (Churn = 1)
pred_proba = pred_proba[:,1] 
pred_proba


# ### ROC

# #### A curva ROC resume todas as matrizes de confusão. 

# In[139]:


# plot ROC

plt.figure(figsize=(12, 8))

fpr, tpr, thresholds = roc_curve(y_test, pred_proba)

plt.title('Receiver Operating Characteristic (ROC)')
plt.plot(fpr, tpr, label='Random Forest')
plt.legend(loc='lower right')
plt.plot([0,1],[0,1],'k--')
plt.xlim([-0.1,1.1])
plt.ylim([-0.1,1.1])
plt.ylabel('True Positive Rate (TPR) - Recall')
plt.xlabel('False Positive Rate (FPR)')
plt.show()


# ### AUROC

# In[133]:


print('AUROC:', roc_auc_score(y_test, y_pred))


# In[115]:


#Criar as predições para os valores de todo o dataset

pred_dataset = grid_obj.predict(X)
print(pred_dataset)


# ### Criar a base de dados com os valores de predição

# In[128]:


#Criar as probabilidades para os valores de todo o dataset
pred_proba_dataset = grid_obj.predict_proba(X)

#Probabilidade do colaborador deixar a empresa
pred_proba_left = pred_proba_dataset[:,1]


# In[132]:


#Criar a base final com o que o modelo estimou
dataset_['predict'] = pred_dataset
dataset_['predict_proba_left'] = pred_proba_left

dataset_.to_csv('Base_churn.csv')


# In[ ]:




