'''
Os conjuntos são estruturas de dados que armazenam elementos unicos (diferente de listas e duplas)


Não é possivel acessar valores especificos atraves de indice(como em listas e duplas)

Conjuntos não respeitam ordem,como mostrado na função update

É possivel realizar as operações de união,interseção,diferença,diferença simetrica.

'''


'''
Topicos aula = Criação de conjuntos,adicionar e remover, operações

'''

'''

Maneiras de criar um conjunto

1*Maneira
s1 = {} conjunto vazio,set
print(type(s1)) = se estiver vazio, ele vira um dict

2*Maneira
set =  coleção de itens desordenados , set são utilizados em operações matemáticas de união, interseção e diferença simétrica.

s1 = set()
print(type(s1)) = vai retornar um set mesmo estando vazio

3*Maneria
s2 = {1,'Matematica',4,11.3}
criar um conjunto de maneira manual
print(s2, type(s2)) = vai mostrar o conjunto, é o tipo dele que é o set



4*Maneira
maneira automatica atraves de um for

cria 20 elementos de 0 a 20

s3 = {i for i in range(21)}

Acessa cada um desses elementos,elevando cada um a 2

for elem in s3:
    print(elem ** 2)
'''

'''Adicionar e remover'''

'''

'''
