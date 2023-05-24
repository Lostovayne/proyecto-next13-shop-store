"use client";
import { Carousel } from "@material-tailwind/react";

export default function Carrousel() {
  return (
    <Carousel className="h-64 w-full">
      <img
        src="https://img.freepik.com/free-photo/young-pretty-girl-choosing-trying-model-shoes-shop_155003-15656.jpg?w=900&t=st=1684891854~exp=1684892454~hmac=c3a13cd2ff5d39a9bc62a419000fbba7574819f6dc7149a92062eaad232425b7"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/woman-glasses-hat-holding-her-shopping-bags-red-wall_114579-49482.jpg?w=900&t=st=1684891799~exp=1684892399~hmac=079ea465194265f77cba54c0574b82adacc197cc85bb6e98e8091e6a5f312c37"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/attractive-stylish-smiling-woman-choosing-apparel-clothing-store_285396-4646.jpg?w=900&t=st=1684891925~exp=1684892525~hmac=e4f41c9c02ab519aa3eee2d50d221bcba5ee5f79379bce8a56e3692e216b114c"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
