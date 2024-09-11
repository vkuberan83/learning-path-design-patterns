# Creational Patterns

<img src="/images/creational-patterns/creational.png" alt="Design Patterns" width="128" />

Creational design patterns abstract object instantiation, making systems independent of how objects are created, composed, or represented. Class creational patterns leverage inheritance to vary instantiated classes, while object creational patterns delegate instantiation to another object.

As systems evolve to rely more on object composition than class inheritance, the focus shifts from hardcoding fixed behaviors to defining a smaller set of fundamental behaviors that can be composed into more complex ones. Therefore, creating objects with specific behaviors involves more than just class instantiation.

There are five primary creational design patterns, as described in the Gang of Four (GoF) book on design patterns. These patterns are intended to abstract the process of object creation and provide different strategies for constructing objects, focusing on flexibility and reusability.

1. [Factory](factory.md)
2. [Abstract Factory](abstract-factory.md)
3. [Builder](builder.md)
4. [Prototype](prototype.md)
5. [Singleton](singleton.md)