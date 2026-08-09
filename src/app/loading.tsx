import React from "react";
import CinematicLoader from "@/components/ui/CinematicLoader";

export default function Loading() {
  return <CinematicLoader fullScreen={true} message="LOADING CINEMA CATALOG..." />;
}
