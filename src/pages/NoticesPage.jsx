import React from "react";
import Search from "../components/Search/Search";
import TagsArray from "../components/TagsArray/TagsArray";
import PetList from "../components/PetList/PetList";
import AddPetBtn from "components/AddPetBtn/addPetBtn";

const NoticesPage = () => {
  return (
    <div className="container">
      <Search />
      <AddPetBtn />
      <PetList />
    </div>
  );
};

export default NoticesPage;
