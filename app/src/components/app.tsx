import React from "react";
import { Table } from "@ig/components/table";
import { Heading } from "@ig/components/heading";
import { WelcomeMessage } from "@ig/constants";
import { useTest } from "@hooks/test";

export const App = () => {
  useTest();

  return (
    <div>
      <Heading text={WelcomeMessage} />
      <Table />
    </div>
  );
};
