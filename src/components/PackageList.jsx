import React from "react";
import Package from './Package';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

let masterPackageList = [
  {
    name: 'The Best Package',
    description: 'This is the very best package and it does all the best things. You simply have to check out this very good package.',
    price: 5
  },
  {
    name: 'The Good Package',
    description: 'This is a very good package and it does all the good things. You simply have to check out this good package.',
    price: 3
  },
  {
    name: 'The Mediocre Package',
    description: 'This is a package and it does all the things. You simply have to check out this package.',
    price: 1
  },
]

function PackageList(props){
  return (
    <div>
      {masterPackageList.map((package_var, index) =>
      <Package name={package_var.name}
        description={package_var.description}
        price={package_var.price}/>
      )}
    </div>
  )

}

export default PackageList;
