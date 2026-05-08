Question: Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## Answer:

any disables TypeScript safety and can cause hidden bugs, so it is called a type safety hole.On the other hand, unknown is safer because it forces type checking before use. Type narrowing helps convert broad types into specific types using conditions like typeof or in.
