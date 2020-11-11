import spacy
import pandas as pd
from torchtext.data import Field, BucketIterator, TabularDataset
from sklearn.model_selection import train_test_split

english_txt = open('train_RNN_english.txt', encodin='utf8').read().split('\n')
tigrinya_txt = open('train_RNN_tigrinya.txt', encodin='utf8').read().split('\n')

raw_data = {'Englsih': [line for line in english_txt[1:1000]],
            'Tigrinya':[line for line in tigrinya_txt[1:1000]]}
df = pd.DataFrame(raw_data, column=['English', 'Tigrinya'])

train , test = train_test_split(df, test_size=0.2)

train.to_json('train.json', orient='records', lines=True)
test.to_json('test.json', orient='records', lines=True)

train.to_csv('train.csv', index=False)
test.to_csv('test.csv', index=False)

spacy_eng = spacy.load('en')
spacy_tig = spacy.load('tig')

def tokenize_eng(text):
    return [tok.text for tok in spacy_eng.tokenize_eng(text)]
    
def tokenize_tig(text):
    return [tok.text for tok in spacy_etig.tokenize_eng(text)]

english = Field(sequencial=True, use_vocab=True, tokenize=tokenize_eng, lower=True)
tigrinya = Field(sequencial=True, use_vocab=True, tokenize=tokenize_tig, lower=True)
    
fields = {'English': ('eng', english), 'Tigrinya':('tig', tigrinya)}

train_data, test_data = TabularDataset.splits(
    path='',
    train='train.json',
    test = 'test.json',
    format ='json',
    fields = fields

)

english.build_vocab(train_data, max_size=10000, min_feq=2)
tigrinya.build_vocab(train_data, max_size=10000, min_feq=2)

train_iterator, test_iterator = BucketIterator.splits(
    (train_data, test_data),
    batch_size=32,
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    )

for batch in train_iterator:
    print(batch)
