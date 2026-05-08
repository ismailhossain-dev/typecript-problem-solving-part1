//=========Problem-1============
const filterEvenNumbers = (arrayOfNumbers: number[]) => {
  return arrayOfNumbers.filter((num) => num % 2 === 0);
};

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//=========Problem-2===========

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

const result2 = reverseString("typescript");

//==========Problem-3===========

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }

  return "Unknown";
};

const output1 = checkType("Hello");
const output2 = checkType(42);

//===========Problem-4==========
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

// Usage
const result4 = getProperty(user, "name");

console.log(result4);

//==========Problem-5==========
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

const toggleReadStatus = (obj: Book): Book => {
  return {
    ...obj,
    isRead: true,
  };
};

const bookInfo: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
  isRead: true,
};

const result5 = toggleReadStatus(bookInfo);
console.log(result5);
//==========Problem-6===========

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

//===========Problem-7===========

const getIntersection = (arrayOfNumber1: number[], arrayOfNumber2: number[]): number[] => {
  return arrayOfNumber1.filter((x) => arrayOfNumber2.includes(x));
};
const result7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
