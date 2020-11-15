import React from "react";
import { Link } from "react-router-dom";

const CheckInsurance = (props) => {
  return (
    <div className="ui container">
      <h1>TERMS AND CONDITIONS</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget
        sit amet tellus cras adipiscing enim eu. Malesuada pellentesque elit
        eget gravida cum. Dolor sit amet consectetur adipiscing elit
        pellentesque habitant. Turpis cursus in hac habitasse. Nec feugiat nisl
        pretium fusce id velit ut tortor. Amet venenatis urna cursus eget nunc
        scelerisque. Sollicitudin nibh sit amet commodo nulla. Tempor orci eu
        lobortis elementum nibh. Purus faucibus ornare suspendisse sed nisi
        lacus sed viverra tellus. Amet consectetur adipiscing elit duis
        tristique. Aliquam purus sit amet luctus venenatis lectus. Ut diam quam
        nulla porttitor massa id neque. Vehicula ipsum a arcu cursus vitae
        congue. Vitae tempus quam pellentesque nec nam aliquam sem et tortor.
        Adipiscing elit pellentesque habitant morbi. Duis ultricies lacus sed
        turpis tincidunt id aliquet. Arcu bibendum at varius vel pharetra. Amet
        tellus cras adipiscing enim eu. Rhoncus urna neque viverra justo nec.
        Ullamcorper sit amet risus nullam eget. Enim neque volutpat ac tincidunt
        vitae semper quis lectus nulla. Arcu vitae elementum curabitur vitae
        nunc sed velit. Sit amet luctus venenatis lectus magna fringilla urna
        porttitor rhoncus.
      </p>
      <p>
        Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Velit
        euismod in pellentesque massa placerat duis ultricies. Fermentum dui
        faucibus in ornare quam viverra orci. Nunc sed augue lacus viverra vitae
        congue eu consequat. Eget arcu dictum varius duis. Sit amet venenatis
        urna cursus eget nunc. Nibh tortor id aliquet lectus proin nibh nisl
        condimentum. Luctus venenatis lectus magna fringilla urna porttitor
        rhoncus dolor. Habitant morbi tristique senectus et netus et malesuada
        fames ac. Turpis egestas maecenas pharetra convallis posuere morbi leo.
        At varius vel pharetra vel turpis. Augue lacus viverra vitae congue eu
        consequat ac felis donec. Ultrices vitae auctor eu augue ut lectus arcu.
        At volutpat diam ut venenatis tellus in.
      </p>
      <Link
        to={`/item/book/${props.match.params.id}`}
        className="ui green button"
      >
        Book Slot
      </Link>
      <Link to="/item/search" className="ui negative button">
        Browse Other Items
      </Link>
    </div>
  );
};

export default CheckInsurance;
