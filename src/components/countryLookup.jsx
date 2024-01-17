"use client"

import React from 'react'
import {useState, useEffect} from 'react';

function CountryLookup() {
  const [country, setCountry] = useState("India");

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setCountry(data.country));
  }, []);
  return (
    <div>{country}</div>
  );
}

export default CountryLookup;