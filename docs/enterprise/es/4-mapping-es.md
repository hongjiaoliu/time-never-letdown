---
icon: edit
date: 2022-05-04
category:
  - Java企业开发
tag:
  - ElasticSearch
star: false
---

# 4-Mapping

# Mapping-映射
[https://www.elastic.co/guide/en/elasticsearch/reference/7.11/mapping.html](https://www.elastic.co/guide/en/elasticsearch/reference/7.11/mapping.html)
## 1. Mapping介绍
Maping是用来定义一个文档（document），以及它所包含的属性（field）是如何存储和索引的。
比如：使用maping来定义：

- 哪些字符串属性应该被看做全文本属性（full text fields）；
- 哪些属性包含数字，日期或地理位置；
- 文档中的所有属性是否都嫩被索引（all 配置）；
- 日期的格式；
- 自定义映射规则来执行动态添加属性；

查看mapping信息
```plsql
GET bank/_mapping

{
  "bank" : {
    "mappings" : {
      "properties" : {
        "account_number" : {
          "type" : "long"
        },
        "address" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "age" : {
          "type" : "long"
        },
        "balance" : {
          "type" : "long"
        },
        "city" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "email" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "employer" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "firstname" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "gender" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "lastname" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "state" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        }
      }
    }
  }
}
```
## 2. 新版本type移除
ElasticSearch7-去掉type概念

1. 关系型数据库中两个数据表示是独立的，即使他们里面有相同名称的列也不影响使用，但ES中不是这样的。elasticsearch是基于Lucene开发的搜索引擎，而ES中不同type下名称相同的filed最终在Lucene中的处理方式是一样的。
   - 两个不同type下的两个user_name，在ES同一个索引下其实被认为是同一个filed，你必须在两个不同的type中定义相同的filed映射。否则，不同type中的相同字段名称就会在处理中出现冲突的情况，导致Lucene处理效率下降。
   - 去掉type就是为了提高ES处理数据的效率。
2. Elasticsearch 7.x URL中的type参数为可选。比如，索引一个文档不再要求提供文档类型。
3. Elasticsearch 8.x 不再支持URL中的type参数。
4. 解决：
将索引从多类型迁移到单类型，每种类型文档一个独立索引
将已存在的索引下的类型数据，全部迁移到指定位置即可。详见数据迁移
> **Elasticsearch 7.x**
> - Specifying types in requests is deprecated. For instance, indexing a document no longer requires a document `type`. The new index APIs are `PUT {index}/_doc/{id}` in case of explicit ids and `POST {index}/_doc` for auto-generated ids. Note that in 7.0, `_doc` is a permanent part of the path, and represents the endpoint name rather than the document type.
> - The `include_type_name` parameter in the index creation, index template, and mapping APIs will default to `false`. Setting the parameter at all will result in a deprecation warning.
> - The `_default_` mapping type is removed.
> 
**Elasticsearch 8.x**
> - Specifying types in requests is no longer supported.
> - The `include_type_name` parameter is removed.

## 3. 属性类型
> 参考：官方[属性类型](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/mapping-types.html)

## 映射操作
> 参考：创建[映射操作](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html)

### 1. 创建索引映射
创建索引并指定属性的映射规则（相当于新建表并指定字段和字段类型）
```plsql
PUT /my_index
{
  "mappings": {
    "properties": {
      "age": {
        "type": "integer"
      },
      "email": {
        "type": "keyword"
      },
      "name": {
        "type": "text"
      }
    }
  }
}
```
结果：
```plsql
{
  "acknowledged" : true,
  "shards_acknowledged" : true,
  "index" : "my_index"
}
```
### 2. 给已有映射增加字段
> [https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#add-field-mapping](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#add-field-mapping)

```plsql
PUT /my_index/_mapping
{
  "properties": {
    "employee-id": {
      "type": "keyword",
      "index": false
    }
  }
}

# 这里的 "index": false，表明新增的字段不能被检索。默认是true
# https://www.elastic.co/guide/en/elasticsearch/reference/7.x/mapping-index.html
```
结果：
```plsql
{
  "acknowledged" : true
}
```
### 3. 查看映射
> [https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#view-mapping](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#view-mapping)

```plsql
GET /my_index/_mapping
# 查看某一个字段的映射
GET /my_index/_mapping/field/employee-id
```
结果：
```plsql
{
  "my_index" : {
    "mappings" : {
      "properties" : {
        "age" : {
          "type" : "integer"
        },
        "email" : {
          "type" : "keyword"
        },
        "employee-id" : {
          "type" : "keyword",
          "index" : false
        },
        "name" : {
          "type" : "text"
        }
      }
    }
  }
}
# index false 表示不能被索引找到
```
### 4. 更新映射
> [https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#update-mapping](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#update-mapping)

对于已经存在的字段映射，我们不能更新。更新必须创建新的索引，进行数据迁移。
> Changing an existing field could invalidate data that’s already indexed.

### 5. 数据迁移
迁移方式分为两种，一种是7和7之后去掉type的情况，一种是包含type 迁移的情况。
#### 无type数据迁移
```plsql
POST reindex [固定写法]
{
  "source":{
      "index":"twitter"
   },
  "dest":{
      "index":"new_twitters"
   }
}
```
#### 有type数据迁移
```plsql
POST reindex [固定写法]
{
  "source":{
      "index":"twitter",
      "type":"twitter"
   },
  "dest":{
      "index":"new_twitters"
   }
}
```
### 6. 数据迁移实例
对于我们的测试数据,是包含 type 的索引 bank。
现在我们创建新的索引 newbank 并修改一些字段的类型来演示当需要更新映射时的数据迁移操作。
#### ① 查看索引 bank 当前字段映射类型
```plsql
GET /bank/_mapping
# 结果
{
  "bank" : {
    "mappings" : {
      "properties" : {
        "account_number" : {
          "type" : "long"
        },
        "address" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "age" : {
          "type" : "long"
        },
        "balance" : {
          "type" : "long"
        },
        "city" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "email" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "employer" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "firstname" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "gender" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "lastname" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "state" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        }
      }
    }
  }
}

```
#### ② 创建新索引 newbank 并修改字段类型
```plsql
PUT /newbank
{
  "mappings": {
    "properties": {
      "account_number": {
        "type": "long"
      },
      "address": {
        "type": "text"
      },
      "age": {
        "type": "integer"
      },
      "balance": {
        "type": "long"
      },
      "city": {
        "type": "keyword"
      },
      "email": {
        "type": "keyword"
      },
      "employer": {
        "type": "keyword"
      },
      "firstname": {
        "type": "text"
      },
      "gender": {
        "type": "keyword"
      },
      "lastname": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "state": {
        "type": "keyword"
      }
    }
  }
}
```
#### ③ 数据迁移
```plsql
POST _reindex
{
  "source": {
    "index": "bank",
    "type": "account"
  },
  "dest": {
    "index": "newbank"
  }
}
```
结果：
```plsql
#! Deprecation: [types removal] Specifying types in reindex requests is deprecated.
{
  "took" : 269,
  "timed_out" : false,
  "total" : 1000,
  "updated" : 0,
  "created" : 1000,
  "deleted" : 0,
  "batches" : 1,
  "version_conflicts" : 0,
  "noops" : 0,
  "retries" : {
    "bulk" : 0,
    "search" : 0
  },
  "throttled_millis" : 0,
  "requests_per_second" : -1.0,
  "throttled_until_millis" : 0,
  "failures" : [ ]
}
```
#### ④ 查看迁移后的数据
```plsql
GET /newbank/_search
# 结果： 迁移后 type 统一为 _doc 移除 type
{
  "took" : 367,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 1000,
      "relation" : "eq"
    },
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "newbank",
        "_type" : "_doc",
        "_id" : "1",
        "_score" : 1.0,
        "_source" : {
          "account_number" : 1,
          "balance" : 39225,
          "firstname" : "Amber",
          "lastname" : "Duke",
          "age" : 32,
          "gender" : "M",
          "address" : "880 Holmes Lane",
          "employer" : "Pyrami",
          "email" : "amberduke@pyrami.com",
          "city" : "Brogan",
          "state" : "IL"
        }
      },
      ...
```
