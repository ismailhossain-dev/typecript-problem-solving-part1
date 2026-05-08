Question: How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

---

Answer:

---

Introduction

TypeScript-এর একটি powerful feature হলো Generics। Generics ব্যবহার করলে আমরা এমন function বা component তৈরি করতে পারি, যা বিভিন্ন ধরনের data নিয়ে কাজ করতে পারে, কিন্তু তবুও type safety বজায় থাকে। এই লেখায় আমরা দেখবো Generics কীভাবে reusable এবং strictly typed code তৈরি করতে সাহায্য করে।

What are Generics and Why They Matter

Generics আমাদেরকে একটি placeholder type ব্যবহার করার সুযোগ দেয়, যা পরে নির্দিষ্ট type দিয়ে replace করা যায়। এর ফলে একই function বা component বিভিন্ন ধরনের data handle করতে পারে।

function identity<T>(value: T): T {
return value;
}

const result1 = identity<string>("Hello");
const result2 = identity<number>(123);

এখানে T একটি generic type, যা call করার সময় define করা হচ্ছে। ফলে functionটি reusable এবং type-safe।

Building Reusable Functions with Generics

Generics ব্যবহার করে আমরা এমন function লিখতে পারি যা যেকোনো data type-এর সাথে কাজ করতে পারে, কিন্তু return type ঠিকভাবে maintain করে।

function getFirstElement<T>(arr: T[]): T {
return arr[0];
}

const num = getFirstElement([1, 2, 3]); // number
const str = getFirstElement(["a", "b"]); // string

এখানে functionটি array-এর type অনুযায়ী automatically return type set করছে।

Generics in Components (Reusability + Type Safety)

React বা অন্য component-based system-এ Generics খুব useful। এটি component-কে flexible এবং type-safe করে।

type BoxProps<T> = {
value: T;
};

function Box<T>({ value }: BoxProps<T>) {
return <div>{value}</div>;
}

এখন Box component যেকোনো type-এর value নিতে পারবে, কিন্তু type mismatch হলে error দিবে।

How Generics Maintain Strict Typing

Generics ensure করে যে input এবং output এর মধ্যে type consistency থাকে। মানে, তুমি যেই type pass করবে, সেই type-ই return পাবে।

function wrapInArray<T>(value: T): T[] {
return [value];
}

const result = wrapInArray(5); // number[]

এখানে TypeScript automatically বুঝে নিচ্ছে return type number[] হবে।

Conclusion

Generics আমাদেরকে reusable এবং flexible code লিখতে সাহায্য করে, যেখানে একই function বা component বিভিন্ন ধরনের data handle করতে পারে। একই সাথে এটি strict type checking বজায় রাখে, ফলে runtime error কমে যায়। তাই Generics TypeScript-এ scalable এবং maintainable code লেখার জন্য খুবই গুরুত্বপূর্ণ একটি feature।
