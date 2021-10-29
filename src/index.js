import React from "react";
import ReactDOM from "react-dom";
// css
import "./index.css";
//setup vars
const firstbook = {
  author: "Morgan Housel",
  title: "The psychology of money",
  img: "https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg",
};
const secondbook = {
  author: "Robert kiyosaki",
  title: "Rich Dad,Poor Dad",
  img: "https://images-eu.ssl-images-amazon.com/images/I/81dQwQlmAXL._AC_UL200_SR200,200_.jpg",
};
const thirdbook = {
  author: "Chetan Bhagat",
  title: "400 Days",
  img: "https://images-eu.ssl-images-amazon.com/images/I/81tSFxicufL._AC_UL200_SR200,200_.jpg",
};
function BookList() {
  return (
    <section className="bookrow">
      <Book
        img={firstbook.img}
        title={firstbook.title}
        author={firstbook.author}
      />
      <Book
        img={secondbook.img}
        title={secondbook.title}
        author={secondbook.author}
      />
      <Book
        img={thirdbook.img}
        title={thirdbook.title}
        author={thirdbook.author}
        number={22}
      />
      <Book
        img={firstbook.img}
        title={firstbook.title}
        author={firstbook.author}
      />
      <Book
        img={secondbook.img}
        title={secondbook.title}
        author={secondbook.author}
      />
      <Book
        img={thirdbook.img}
        title={thirdbook.title}
        author={thirdbook.author}
        number={22}
      />
      <Book
        img={firstbook.img}
        title={firstbook.title}
        author={firstbook.author}
      />
      <Book
        img={secondbook.img}
        title={secondbook.title}
        author={secondbook.author}
      />
      <Book
        img={thirdbook.img}
        title={thirdbook.title}
        author={thirdbook.author}
        number={22}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
