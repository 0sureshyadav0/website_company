const blogData = [
  {
    id: 0,
    imgLink:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-1125-SQL_Server_2022_web_blade_image_RWWaqg:VP1-539x440?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=600&qlt=100&fmt=png-alpha&fit=constrain",
    title: " SQL Language",
    subtitle: " Web Development",
    date: " 07 March 2023",
    authorName: " Suresh Yadav",
    author_post: " Full Stack Software Engineer",
    authorLink: "https:sureshyadav.info.np",
    // author_organization:" "
    readTime: " 6 min read ",
    readTxt:
      " Its a Structured Query Language. It is used to store data in database, manipulating as well as retrieving them." +
      " Before learning any technology, it is necessary to have a roadmap which creates efficiency in learning." +
      " For MySql have a look at below diagram:" +
      ". Roadmap" +
      ". 1. Learn the basics of SQL syntax: Start by understanding the basic structure of SQL commands, including SELECT, INSERT, UPDATE, DELETE and JOIN statements." +
      ". 2. Master data manipulation: Once you have got the basics down, start learning how to manipulate data using SQL. Learn how to filter data using WHERE and HAVING clauses, sort data using ORDER BY, group data using GROUP BY, and aggregate data using functions like COUNT, AVG and SUM." +
      ". 3. Study database design: Understanding how databases are designed is key to using SQL effectively. Learn about the different types of database models, normalization, and how to design effective database schema." +
      ". 4. Practice with real-world problems: Try solving real-world problems using SQL, such as querying data from a sales database, analyzing web traffic, or tracking inventory." +
      ". 5. Learn about advanced topics: Once you are comfortable with the basics, start exploring more advanced topics like subqueries, views, stored procedures, and triggers." +
      ". 6. Work with different types of databases: SQL is used with many different types of databases, such as MySQL, PostgreSQL, Microsoft SQL Server, and Oracle. Try working with different databases to gain more experience." +
      ". 7. Learn about NoSQL databases: SQL is not the only type of database out there. Learn about NoSQL databases like MongoDB, Cassandra, and DynamoDB, and how they differ from traditional SQL databases." +
      ". 8. Keep learning: SQL is a powerful tool, and there is always more to learn. Stay up to date with new features and best practices by following online resources, attending conferences, and participating in online communities." +
      ". Structured Query Language, also known as SQL, is a programming language used to manage and manipulate data in a relational database management system (RDBMS). SQL is widely used in the software industry and is considered a standard for managing databases. In this blog, we will explore the basics of SQL and how it is used to interact with databases. SQL is a declarative language, which means that it describes what you want to do with the data rather than how to do it. In other words, you tell the database what you want it to do, and it takes care of the details. SQL is made up of commands or statements that are used to create, retrieve, update, and delete data from a database." +
      " SQL commands can be divided into four main categories:" +
      " Data Definition Language (DDL)" +
      " Data Manipulation Language (DML)" +
      " Data Control Language (DCL)" +
      " Transaction Control Language (TCL)" +
      ". Data Definition Language (DDL) commands are used to define the database structure. DDL commands are used to create, modify, and delete database objects such as tables, indexes, and views. Examples of DDL commands include CREATE, ALTER, and DROP." +
      " Data Manipulation Language (DML) commands are used to manipulate the data stored in a database. DML commands are used to insert, update, and delete data in a database. Examples of DML commands include INSERT, UPDATE, and DELETE." +
      " Data Control Language (DCL) commands are used to control access to data stored in a database. DCL commands are used to grant and revoke privileges to users and roles. Examples of DCL commands include GRANT and REVOKE." +
      " Transaction Control Language (TCL) commands are used to control transactions in a database. A transaction is a series of operations performed on a database that must be completed as a single unit. Examples of TCL commands include COMMIT and ROLLBACK. Lets take a look at some common SQL commands and their uses: SELECT: The SELECT command is used to retrieve data from a database. You can use the SELECT command to retrieve data from one or more tables in a database." +
      " The basic syntax for the SELECT command is as follows:" +
      " SELECT column1, column2, column3, ..." +
      " FROM table_name;" +
      ". INSERT: The INSERT command is used to insert data into a database. The basic syntax for the INSERT command is as follows:" +
      " INSERT INTO table_name (column1, column2, column3, ...)" +
      " VALUES (value1, value2, value3, ...);" +
      ". UPDATE: The UPDATE command is used to update data in a database. The basic syntax for the UPDATE command is as follows:" +
      " UPDATE table_name" +
      " SET column1 = value1, column2 = value2, ..." +
      " WHERE condition;" +
      ". DELETE: The DELETE command is used to delete data from a database. The basic syntax for the DELETE command is as follows:" +
      " DELETE FROM table_name" +
      " WHERE condition;" +
      " In conclusion, SQL is a powerful programming language that is used to manage and manipulate data in a relational database management system. SQL commands can be used to create, retrieve, update, and delete data in a database. By understanding the basics of SQL, you can interact with databases and manipulate data to suit your needs",
    description: `
      
        It's a Structured Query Language. It is used to store data in database,
        manipulating as well as retrieving them.<br />
        Before learning any technology, it is necessary to have a roadmap which
        creates efficiency in learning.<br />
        For MySql have a look at below diagram:<br />
      
       <div class=" image" > </div><br />
      <p>Roadmap </p>
      <ol>
        <li>
          Learn the basics of SQL syntax: Start by understanding the basic
          structure of SQL commands, including SELECT, INSERT, UPDATE, DELETE
          and JOIN statements.
        </li>

        <li>
          Master data manipulation: Once you've got the basics down, start
          learning how to manipulate data using SQL. Learn how to filter data
          using WHERE and HAVING clauses, sort data using ORDER BY, group data
          using GROUP BY, and aggregate data using functions like COUNT, AVG and
          SUM.
        </li>

        <li>
          Stydy database design: Understanding how databases are designed is key
          to using SQL effectively. Learn about the different types of database
          models, normalization, and how to design effective database schema.
        </li>

        <li>
          Practice with real-world problems: Try solving real-world problems
          using SQL, such as querying data from a sales database, analyzing web
          traffic, or tracking inventory.
        </li>

        <li>
          Learn about advanced topics: Once you're comfortable with the basics,
          start exploring more advanced topics like subqueries, views, stored
          procedures, and triggers.
        </li>

        <li>
          Work with different types of databases: SQL is used with many
          different types of databases, such as MySQL, PostgreSQL, Microsoft SQL
          Server, and Oracle. Try working with different databases to gain more
          experience.
        </li>

        <li>
          Learn about NoSQL databases: SQL isn't the only type of database out
          there. Learn about NoSQL databases like MongoDB, Cassandra, and
          DynamoDB, and how they differ from traditional SQL databases.
        </li>

        <li>
          Keep learning: SQL is a powerful tool, and there's always more to
          learn. Stay up to date with new features and best practices by
          following online resources, attending conferences, and participating
          in online communities.
        </li>
      </ol>

      <p>
        Structured Query Language, also known as SQL, is a programming language
        used to manage and manipulate data in a relational database management
        system (RDBMS). SQL is widely used in the software industry and is
        considered a standard for managing databases. In this blog, we will
        explore the basics of SQL and how it is used to interact with databases.
        SQL is a declarative language, which means that it describes what you
        want to do with the data rather than how to do it. In other words, you
        tell the database what you want it to do, and it takes care of the
        details. SQL is made up of commands or statements that are used to
        create, retrieve, update, and delete data from a database. 
        <br>
        SQL commands can be divided into four main categories:
      </p>
      <ul>
          <li>Data Definition Language (DDL)</li>
          <li>Data Manipulation Language (DML)</li>
          <li>Data Control Language (DCL)</li>
          <li>Transaction Control Language (TCL)</li>
      </ul>
      <p>
        Data Definition Language (DDL) commands are used to define the database
        structure. DDL commands are used to create, modify, and delete database
        objects such as tables, indexes, and views. Examples of DDL commands
        include CREATE, ALTER, and DROP. <br /><br />

        Data Manipulation Language (DML) commands are used to manipulate the
        data stored in a database. DML commands are used to insert, update, and
        delete data in a database. Examples of DML commands include INSERT,
        UPDATE, and DELETE.<br /><br />

        Data Control Language (DCL) commands are used to control access to data
        stored in a database. DCL commands are used to grant and revoke
        privileges to users and roles. Examples of DCL commands include GRANT
        and REVOKE. <br /><br />

        Transaction Control Language (TCL) commands are used to control
        transactions in a database. A transaction is a series of operations
        performed on a database that must be completed as a single unit.
        Examples of TCL commands include COMMIT and ROLLBACK. Let's take a look
        at some common SQL commands and their uses: SELECT: The SELECT command
        is used to retrieve data from a database. You can use the SELECT command
        to retrieve data from one or more tables in a database. 
        <br><br>
        The basic syntax for the SELECT command is as follows:
      </p>
      <div class=" code" >
        <pre>
<code class='sql'>
SELECT column1, column2, column3, ...
FROM table_name;
</code>
</pre>
      </div>
      <p>
        INSERT: The INSERT command is used to insert data into a database. The
        basic syntax for the INSERT command is as follows:
      </p>
      <div class=" code" >
        <pre>
<code class='sql'>
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
</code>
</pre>
      </div>
      <p>
        UPDATE: The UPDATE command is used to update data in a database. The
        basic syntax for the UPDATE command is as follows:
      </p>
      <div class=" code" >
        <pre>
<code class='sql'>
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
</code>
</pre>
      </div>
      <p>
        DELETE: The DELETE command is used to delete data from a database. The
        basic syntax for the DELETE command is as follows:
      </p>

      <div class=" code" >
        <pre>
<code class='sql'>
DELETE FROM table_name
WHERE condition;
</code>
</pre>
      </div>
      <p>
        In conclusion, SQL is a powerful programming language that is used to
        manage and manipulate data in a relational database management system.
        SQL commands can be used to create, retrieve, update, and delete data in
        a database. By understanding the basics of SQL, you can interact with
        databases and manipulate data to suit your needs.
      </p>
    `,
    body: " Body",
    link: " index.html",
    list: [" Install VS code", " Open folder", " Run code"],
    code: [],
    category: "Database",
  },

  {
     id: 1,
    imgLink:
      "https://f4n3x6c5.stackpathcdn.com/article/data-structure-and-algorithm-common-types/Images/Data%20Structure%20And%20Algorithm1.jpg",
    title: " DSA ",
    subtitle: " DSA",
    date: " 20 April 2023",
    authorName: " Suresh Yadav",
    author_post: " Full Stack Software Engineer",
    authorLink: "https:sureshyadav.info.np",
    // author_organization:" "
    readTime: " 6 min read ",
    category: " DSA"
  },
   {
     id: 2,
    imgLink:
      "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/jquery.png",
    title: " jQuery",
    subtitle: " jQuery",
    date: " 20 April 2023",
    authorName: " Suresh Yadav",
    author_post: " Full Stack Software Engineer",
    authorLink: "https:sureshyadav.info.np",
    // author_organization:" "
     readTime: " 6 min read ",
    category:"JavaScript"
  },
    {
    id: 3,
    imgLink:
      "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
    title: " MongoDB ",
    subtitle: " Web Development",
    date: " 05 April 2023",
    authorName: " Suresh Yadav",
    author_post: " Full Stack Software Engineer",
    authorLink: "https:sureshyadav.info.np",
    // author_organization:" "
    readTime: " 6 min read ",
    readTxt:
      " Its a Structured Query Language. It is used to store data in database, manipulating as well as retrieving them." +
      " Before learning any technology, it is necessary to have a roadmap which creates efficiency in learning." +
      " For MySql have a look at below diagram:" +
      ". Roadmap" +
      ". 1. Learn the basics of SQL syntax: Start by understanding the basic structure of SQL commands, including SELECT, INSERT, UPDATE, DELETE and JOIN statements." +
      ". 2. Master data manipulation: Once you have got the basics down, start learning how to manipulate data using SQL. Learn how to filter data using WHERE and HAVING clauses, sort data using ORDER BY, group data using GROUP BY, and aggregate data using functions like COUNT, AVG and SUM." +
      ". 3. Study database design: Understanding how databases are designed is key to using SQL effectively. Learn about the different types of database models, normalization, and how to design effective database schema." +
      ". 4. Practice with real-world problems: Try solving real-world problems using SQL, such as querying data from a sales database, analyzing web traffic, or tracking inventory." +
      ". 5. Learn about advanced topics: Once you are comfortable with the basics, start exploring more advanced topics like subqueries, views, stored procedures, and triggers." +
      ". 6. Work with different types of databases: SQL is used with many different types of databases, such as MySQL, PostgreSQL, Microsoft SQL Server, and Oracle. Try working with different databases to gain more experience." +
      ". 7. Learn about NoSQL databases: SQL is not the only type of database out there. Learn about NoSQL databases like MongoDB, Cassandra, and DynamoDB, and how they differ from traditional SQL databases." +
      ". 8. Keep learning: SQL is a powerful tool, and there is always more to learn. Stay up to date with new features and best practices by following online resources, attending conferences, and participating in online communities." +
      ". Structured Query Language, also known as SQL, is a programming language used to manage and manipulate data in a relational database management system (RDBMS). SQL is widely used in the software industry and is considered a standard for managing databases. In this blog, we will explore the basics of SQL and how it is used to interact with databases. SQL is a declarative language, which means that it describes what you want to do with the data rather than how to do it. In other words, you tell the database what you want it to do, and it takes care of the details. SQL is made up of commands or statements that are used to create, retrieve, update, and delete data from a database." +
      " SQL commands can be divided into four main categories:" +
      " Data Definition Language (DDL)" +
      " Data Manipulation Language (DML)" +
      " Data Control Language (DCL)" +
      " Transaction Control Language (TCL)" +
      ". Data Definition Language (DDL) commands are used to define the database structure. DDL commands are used to create, modify, and delete database objects such as tables, indexes, and views. Examples of DDL commands include CREATE, ALTER, and DROP." +
      " Data Manipulation Language (DML) commands are used to manipulate the data stored in a database. DML commands are used to insert, update, and delete data in a database. Examples of DML commands include INSERT, UPDATE, and DELETE." +
      " Data Control Language (DCL) commands are used to control access to data stored in a database. DCL commands are used to grant and revoke privileges to users and roles. Examples of DCL commands include GRANT and REVOKE." +
      " Transaction Control Language (TCL) commands are used to control transactions in a database. A transaction is a series of operations performed on a database that must be completed as a single unit. Examples of TCL commands include COMMIT and ROLLBACK. Lets take a look at some common SQL commands and their uses: SELECT: The SELECT command is used to retrieve data from a database. You can use the SELECT command to retrieve data from one or more tables in a database." +
      " The basic syntax for the SELECT command is as follows:" +
      " SELECT column1, column2, column3, ..." +
      " FROM table_name;" +
      ". INSERT: The INSERT command is used to insert data into a database. The basic syntax for the INSERT command is as follows:" +
      " INSERT INTO table_name (column1, column2, column3, ...)" +
      " VALUES (value1, value2, value3, ...);" +
      ". UPDATE: The UPDATE command is used to update data in a database. The basic syntax for the UPDATE command is as follows:" +
      " UPDATE table_name" +
      " SET column1 = value1, column2 = value2, ..." +
      " WHERE condition;" +
      ". DELETE: The DELETE command is used to delete data from a database. The basic syntax for the DELETE command is as follows:" +
      " DELETE FROM table_name" +
      " WHERE condition;" +
      " In conclusion, SQL is a powerful programming language that is used to manage and manipulate data in a relational database management system. SQL commands can be used to create, retrieve, update, and delete data in a database. By understanding the basics of SQL, you can interact with databases and manipulate data to suit your needs",
    description: `
      
        It's a Structured Query Language. It is used to store data in database,
        manipulating as well as retrieving them.<br />
        Before learning any technology, it is necessary to have a roadmap which
        creates efficiency in learning.<br />
        For MySql have a look at below diagram:<br />
      
       <div class=" image" > </div><br />
      <p>Roadmap </p>
      <ol>
        <li>
          Learn the basics of SQL syntax: Start by understanding the basic
          structure of SQL commands, including SELECT, INSERT, UPDATE, DELETE
          and JOIN statements.
        </li>

        <li>
          Master data manipulation: Once you've got the basics down, start
          learning how to manipulate data using SQL. Learn how to filter data
          using WHERE and HAVING clauses, sort data using ORDER BY, group data
          using GROUP BY, and aggregate data using functions like COUNT, AVG and
          SUM.
        </li>

        <li>
          Stydy database design: Understanding how databases are designed is key
          to using SQL effectively. Learn about the different types of database
          models, normalization, and how to design effective database schema.
        </li>

        <li>
          Practice with real-world problems: Try solving real-world problems
          using SQL, such as querying data from a sales database, analyzing web
          traffic, or tracking inventory.
        </li>

        <li>
          Learn about advanced topics: Once you're comfortable with the basics,
          start exploring more advanced topics like subqueries, views, stored
          procedures, and triggers.
        </li>

        <li>
          Work with different types of databases: SQL is used with many
          different types of databases, such as MySQL, PostgreSQL, Microsoft SQL
          Server, and Oracle. Try working with different databases to gain more
          experience.
        </li>

        <li>
          Learn about NoSQL databases: SQL isn't the only type of database out
          there. Learn about NoSQL databases like MongoDB, Cassandra, and
          DynamoDB, and how they differ from traditional SQL databases.
        </li>

        <li>
          Keep learning: SQL is a powerful tool, and there's always more to
          learn. Stay up to date with new features and best practices by
          following online resources, attending conferences, and participating
          in online communities.
        </li>
      </ol>

      <p>
        Structured Query Language, also known as SQL, is a programming language
        used to manage and manipulate data in a relational database management
        system (RDBMS). SQL is widely used in the software industry and is
        considered a standard for managing databases. In this blog, we will
        explore the basics of SQL and how it is used to interact with databases.
        SQL is a declarative language, which means that it describes what you
        want to do with the data rather than how to do it. In other words, you
        tell the database what you want it to do, and it takes care of the
        details. SQL is made up of commands or statements that are used to
        create, retrieve, update, and delete data from a database. 
        <br>
        SQL commands can be divided into four main categories:
      </p>
      <ul>
          <li>Data Definition Language (DDL)</li>
          <li>Data Manipulation Language (DML)</li>
          <li>Data Control Language (DCL)</li>
          <li>Transaction Control Language (TCL)</li>
      </ul>
      <p>
        Data Definition Language (DDL) commands are used to define the database
        structure. DDL commands are used to create, modify, and delete database
        objects such as tables, indexes, and views. Examples of DDL commands
        include CREATE, ALTER, and DROP. <br /><br />

        Data Manipulation Language (DML) commands are used to manipulate the
        data stored in a database. DML commands are used to insert, update, and
        delete data in a database. Examples of DML commands include INSERT,
        UPDATE, and DELETE.<br /><br />

        Data Control Language (DCL) commands are used to control access to data
        stored in a database. DCL commands are used to grant and revoke
        privileges to users and roles. Examples of DCL commands include GRANT
        and REVOKE. <br /><br />

        Transaction Control Language (TCL) commands are used to control
        transactions in a database. A transaction is a series of operations
        performed on a database that must be completed as a single unit.
        Examples of TCL commands include COMMIT and ROLLBACK. Let's take a look
        at some common SQL commands and their uses: SELECT: The SELECT command
        is used to retrieve data from a database. You can use the SELECT command
        to retrieve data from one or more tables in a database. 
        <br><br>
        The basic syntax for the SELECT command is as follows:
      </p>
      <div class=" code" >
        <pre>
<code class='sql'>
SELECT column1, column2, column3, ...
FROM table_name;
</code>
</pre>
      </div>
      <p>
        INSERT: The INSERT command is used to insert data into a database. The
        basic syntax for the INSERT command is as follows:
      </p>
      <div class=" code" >
        <pre>
<code class='sql'>
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
</code>
</pre>
      </div>
      <p>
        UPDATE: The UPDATE command is used to update data in a database. The
        basic syntax for the UPDATE command is as follows:
      </p>
      <div class=" code" >
        <pre>
<code class='sql'>
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
</code>
</pre>
      </div>
      <p>
        DELETE: The DELETE command is used to delete data from a database. The
        basic syntax for the DELETE command is as follows:
      </p>

      <div class=" code" >
        <pre>
<code class='sql'>
DELETE FROM table_name
WHERE condition;
</code>
</pre>
      </div>
      <p>
        In conclusion, SQL is a powerful programming language that is used to
        manage and manipulate data in a relational database management system.
        SQL commands can be used to create, retrieve, update, and delete data in
        a database. By understanding the basics of SQL, you can interact with
        databases and manipulate data to suit your needs.
      </p>
    `,
    body: " Body",
    link: " index.html",
    list: [" Install VS code", " Open folder", " Run code"],
    code: [],
    category: " Database",
  },
    {
     id: 4,
    imgLink:
      "https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png",
    title: " Express.js ",
    subtitle: " Express.js ",
    date: " 27 April 2023",
    authorName: " Suresh Yadav",
    author_post: " Full Stack Software Engineer",
    authorLink: "https:sureshyadav.info.np",
    // author_organization:" "
     readTime: " 6 min read ",
    category:"JavaScript"
  },
   {
     id: 5,
    imgLink:
      "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
    title: " React.js ",
    subtitle: " React.js ",
    date: " 27 April 2023",
    authorName: " Suresh Yadav",
    author_post: " Full Stack Software Engineer",
    authorLink: "https:sureshyadav.info.np",
    // author_organization:" "
     readTime: " 6 min read ",
    category:"JavaScript"
  },
    {
     id: 6,
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    title: " Node.js ",
    subtitle: " Node.js ",
    date: " 27 April 2023",
    authorName: " Suresh Yadav",
    author_post: " Full Stack Software Engineer",
    authorLink: "https:sureshyadav.info.np",
    // author_organization:" "
     readTime: " 6 min read ",
    category:"JavaScript"
  }
];

const worksData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1669638781649-5802d884acd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Web Development",
    subtitle: "Ios",
    category: ["All", "Web Design"],
    href: "./Works/Work1.html",
  },
  {
    img: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80",
    title: "Hello",
    subtitle: "Bro",
    category: ["All", "Mobile Apps"],
    href: "./Works/Work2.html",
  },
];
