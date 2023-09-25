import React from "react";
import Search from "../components/Search/Search";
import TagsArray from "../components/TagsArray/TagsArray";
import PetList from "../components/PetList/PetList";

const NoticesPage = () => {
  return (
    <div className="container">
      <Search />
      <TagsArray />
      <PetList />
    </div>
  );
};

export default NoticesPage;
