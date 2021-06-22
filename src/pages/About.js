import React from "react";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import MapComp from "../components/Map";
import Divided from "../components/Divided";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <Nav></Nav>
      <header className="about-header"></header>
      <Welcome
        header="we are a team of dreamers and builders"
        text="Based in the heart of Ashton, Idaho, our team of developers, security specialists and data analysts share years of experience in building simple and human consumer products. Together, our goal is to create a world of frictionless and intuitive experiences."
      ></Welcome>
      <MapComp></MapComp>
      <Divided
        class="divided-div right-divided"
        title="our story"
        text="Cupcake ipsum dolor sit amet carrot cake cake topping. Cake muffin cake candy. Dessert jelly beans soufflé cake marshmallow sugar plum I love I love. Gingerbread muffin sweet roll fruitcake. Jelly-o oat cake jujubes chocolate sweet roll cotton candy gummies. Dragée marshmallow dessert cotton candy bonbon candy canes. udding caramels macaroon jelly I love pie gummies bear claw jelly. Pastry cotton candy oat cake croissant I love lollipop pie. Chocolate bar I love jelly soufflé croissant powder sugar plum I love. Sweet brownie carrot cake cheesecake liquorice cotton candy pudding pie ice cream."
      ></Divided>
      <Divided
        class="divided-div left-divided"
        title="how we think"
        text="Tootsie roll pudding chocolate bar pie chocolate bar. Biscuit candy apple pie gingerbread sweet carrot cake candy tart. Pudding caramels macaroon jelly I love pie gummies bear claw jelly. Pastry cotton candy oat cake croissant I love lollipop pie. Chocolate bar I love jelly soufflé croissant powder sugar plum I love. Sweet brownie carrot cake cheesecake liquorice cotton candy pudding pie ice cream. Dessert I love icing candy muffin tootsie roll jelly-o macaroon chocolate. Candy cookie dragée cupcake carrot cake biscuit marzipan croissant tiramisu. Donut pastry sugar plum oat cake jelly-o powder chocolate bar liquorice. Muffin halvah sugar plum marshmallow apple pie oat cake."
      ></Divided>
      <Footer></Footer>
    </div>
  );
}
export default About;
/* Mom-and-Pop-Safe was started in 2020 by three women with a passion for IT. 
All of us used to work for big corporations and we have dealt with countless 
cases of cyberattacks, which were possible to spot and prevent thanks to expensive 
software, skilled professionals within the company and proper training. 

The idea of Mom-and-Pop-Safe was inspired by Kasia's parents, who run a small bookshop 
and during the COVID-19 pandemic moved their sales online. For their business, and countless 
similar companies, a data breach could mean bankruptcy - and without the means of multinational 
corporations, the owners have a hard time ensuring their business is protected on all fronts. 
While not all small business owners are lucky enough to have a security-specialist-daughter 
who can help protect their family business from cyberattacks, we believe everyone has the right 
to focus on providing goods and services to their customers without losing sleep 
over the online security of their business. 

Enter Mom-and-Pop-Safe, a small business dedicated to making the Internet a safer place 
for other small businesses. We offer a wide range of services from security software 
and network protection to remote backup services, to Security Awareness trainings and consulting. 
Our mission is to provide a comprehensive array of security measures tailored to 
each of our clients' needs, which is why we offer <link to OUR SERVICES> three different options, 
designed to fit different types of businesses. And we calculate the costs based on the number 
of devices - so that any family-run shop or a freshly founded start-up can afford our services.

The Internet is not only for the big players. Why should cybersecurity be any different? */