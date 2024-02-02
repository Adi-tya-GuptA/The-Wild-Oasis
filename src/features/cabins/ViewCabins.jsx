import React from "react";
import { useCabins } from "./useCabins";
import CabinCard from "./CabinCard";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";

const SytledCabinDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 24rem);
  gap: 2.4rem;
  /* padding: 1.4rem; */
  background-color: var(--color-grey-50);
  /* overflow: hidden; */
  @media only screen and (max-width: 480px){
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9,20rem);
    gap: 2rem;
  }
`;

export default function ViewCabins() {
  const { isLoading, cabins, error } = useCabins();
  if (isLoading) return <Spinner />;
  // console.log(cabins);
  return (
    <SytledCabinDiv>
      {cabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} id={cabin.id} />
      ))}
    </SytledCabinDiv>
  );
}
