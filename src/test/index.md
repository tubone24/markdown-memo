# Test page

[[toc]]

## タイトル 1

タイトル

### サブタイトル 1-1

### サブタイトル 1-2

## タイトル 2

| left col     | center col   | right col    |
| ------------ |:------------:| ------------:|
| foo          | bar          | baz          |
| qux          | quux         | corge        |
| grault       | garply       | waldo        |

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

<vue-embed-gist gist-id="tubone24/0cda077c3bc9d4159379292aba31b2a3" file="test"/>

## todo

- [ ] todo
- [x] done

## youtube

[youtube](Fa1YczPNxYw)

==ハイライト表示==のテストです

これは脚注[^1]のテストです

[^1]:これは１つ目の脚注の内容です

++inserted++

::: warning
*here be dragons*
:::

H~2~0

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.
    
<mermaid>
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</mermaid>
