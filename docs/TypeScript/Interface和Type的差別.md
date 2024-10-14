# Interface 和 Type 的差別

## 1.TypeScript 編譯器推論結果不同

### Type

宣告 `Type` 時，所使用的名稱代表的是其背後的型別結構

```typescript
type Person = {
  name: string;
  age: number;
  gender: string;
};
type Employee = Person;

/**
 * TypeScript 編譯器推論結果為：
 * type Employee =
 * {
 *   name: string;
 *   age: number;
 *   gender: string;
 * }
 **/
```

### Interface

Interface 介面宣告時會使用名稱代表 TypeScript 編譯器推論的結果

```typescript
interface Person {
  name: string;
  age: number;
  gender: string;
}
type Employee = Person; // TypeScript 編譯器推論結果為： type Employee = Person
```

## 2.Type 和 Interface 的擴展性差異

### Type

Type 較適合靜態、變動性較小的資料結構，並且可以表達任一型別。

```typescript
type Phone = {
  brand: string;
  model: string;
  price: number;
};
```

雖然 Type 無法擴充，但可以使用交集運算子 `&` 來合併多個 Type。
然而，與 Interface 不同的是，Type 不能進行重新開放（declaration merging），這意味著無法多次聲明一個 Type 來合併屬性。

```typescript
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};
```

另外，Type 不僅限於物件也可以用於其他型別的別名，像是聯合型別、函數型別、原始型別等。

```typescript
// 原始型別別名

type StringAlias = string;

// 聯合型別
type UnionType = string | number;

// 函數型別
type FunctionType = (a: number, b: number) => number;
```

### Interface

Interface 的宣告較為靈活，可以用來描述物件、函式、類別、JSON物件等...，並且可以自由的進行擴充。

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 合併後的 Person 會包含 name 和 age 屬性
const person: Person = {
  name: "John",
  age: 30,
};
```

Interface 支持宣告合併（declaration merging），這表示可以多次宣告同一個 Interface，並且 TypeScript 會將它們合併。

```typescript
interface Phone {
  brand: string;
  model: string;
  price: number;
}

interface SmartPhone extends Phone {
  os: string;
}
```
