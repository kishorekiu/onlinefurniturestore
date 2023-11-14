import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

import Sofa from "./components/products/livingroom/Sofa";
import TvCabinet from "./components/products/livingroom/TvCabinet";
import CoffeeTable from "./components/products/livingroom/CoffeeTable";
import BookShelf from "./components/products/livingroom/BookShelf";

import CupBoard from "./components/products/bedroom/CupBoard";
import DressingTable from "./components/products/bedroom/DressingTable";
import MirrorFrame from "./components/products/bedroom/MirrorFrame";
import Wardrobe from "./components/products/bedroom/Wardrobe";

import DoubleBed from "./components/products/beds/DoubleBed";
import KingBed from "./components/products/beds/KingBed";
import QueenBed from "./components/products/beds/QueenBed";
import SingleBed from "./components/products/beds/SingleBed";

import StudyChair from "./components/products/study/StudyChair";
import StudyTable from "./components/products/study/StudyTable";

import { addProductsToStore } from "./redux/slices/productSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import ProductDetails from "./components/utils/ProductDetails";
import Cart from "./components/cart/Cart";
import Wishlist from "./components/user/Wishlist";
import SearchProducts from "./components/utils/SearchProducts";
import Checkout from "./components/cart/Checkout";
import OrderComplete from "./components/cart/OrderComplete";
import OrderPlacedSuccessfully from "./components/user/OrderPlacedSuccessfully";
import MyOrders from "./components/user/MyOrders";
// import MyCart from "./components/cart/MyCart";

const App = () => {
  let [products, setProducts] = useState();
  const dispatch = useDispatch();
  dispatch(addProductsToStore(products));
  // let products = {
  //   livingRoom: {
  //     sofa: [
  //       {
  //         productCategory: "livingRoom",
  //         productType: "sofa",
  //         title: "Mohan Wooden Tile Mosaic Sofa with Patchwork Cushion (Honey)",
  //         price: "18,951",
  //         finish: "Honey",
  //         size: "54 L X 24 D X 20 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/livingRoom/sofa/first/one.jpeg",
  //           two: "../images/livingRoom/sofa/first/two.jpeg",
  //           three: "../images/livingRoom/sofa/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "sofa",
  //         title: "Rajdhani Wooden Mix Patchwork Sofa Handmade (Teak)",
  //         price: "22,987",
  //         finish: "Teak",
  //         size: "36 L X 30 D X 43 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/livingRoom/sofa/second/one.jpeg",
  //           two: "../images/livingRoom/sofa/second/two.jpeg",
  //           three: "../images/livingRoom/sofa/second/three.jpeg",
  //         },
  //       },
  //     ],
  //     tvCabinet: [
  //       {
  //         productCategory: "livingRoom",
  //         productType: "tvCabinet",
  //         title: "Wage Wooden Entryway Console Table (Walnut)",
  //         price: "24,214",
  //         finish: "Walnut",
  //         size: "60 L X 16 D X 30 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/tvCabinet/first/one.jpeg",
  //           two: "../images/livingRoom/tvCabinet/first/two.jpeg",
  //           three: "../images/livingRoom/tvCabinet/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "tvCabinet",
  //         title: "Hunika Wooden Brass Fitted Antique TV Unit (Teak)",
  //         price: "35,691",
  //         finish: "Teak",
  //         size: "60 L X 20 D X 24 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/tvCabinet/second/one.jpeg",
  //           two: "../images/livingRoom/tvCabinet/second/two.jpeg",
  //           three: "../images/livingRoom/tvCabinet/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "tvCabinet",
  //         title: "Alife Wooden Carved TV Unit (Grey Distress)",
  //         price: "28,514",
  //         finish: "Grey Distress",
  //         size: "58 L X 16 D X 24 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/tvCabinet/third/one.jpeg",
  //           two: "../images/livingRoom/tvCabinet/third/two.jpeg",
  //           three: "../images/livingRoom/tvCabinet/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "tvCabinet",
  //         title: "Samip Wooden Carved Tv Unit Cabinet (Light Grey)",
  //         price: "32,518",
  //         finish: "Light Grey",
  //         size: "60 L X 16 D X 24 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/tvCabinet/fourth/one.jpeg",
  //           two: "../images/livingRoom/tvCabinet/fourth/two.jpeg",
  //           three: "../images/livingRoom/tvCabinet/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //     coffeeTable: [
  //       {
  //         productCategory: "livingRoom",
  //         productType: "coffeeTable",
  //         title: "Natura Wooden Storage Trunk cum Coffee Table (Blue Distress)",
  //         price: "15,451",
  //         finish: "Blue Distress",
  //         size: "42 L X 18 D X 18 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/coffeeTable/first/one.jpeg",
  //           two: "../images/livingRoom/coffeeTable/first/two.jpeg",
  //           three: "../images/livingRoom/coffeeTable/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "coffeeTable",
  //         title: "Kerim Solid Wood Coffee Table with Trunk Storage (Walnut)",
  //         price: "22,981",
  //         finish: "Walnut",
  //         size: "48 L X 24 D X 20 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/livingRoom/coffeeTable/second/one.jpeg",
  //           two: "../images/livingRoom/coffeeTable/second/two.jpeg",
  //           three: "../images/livingRoom/coffeeTable/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "coffeeTable",
  //         title: "Omia Wooden Carved Coffee Table (Cream Distress)",
  //         price: "20,981",
  //         finish: "Cream Distress",
  //         size: "30 L X 30 D X 20 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/coffeeTable/third/one.jpeg",
  //           two: "../images/livingRoom/coffeeTable/third/two.jpeg",
  //           three: "../images/livingRoom/coffeeTable/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "coffeeTable",
  //         title:
  //           "Devin Wooden Carved Storage Trunk Cum Coffee Table (Grey Distress)",
  //         price: "14,271",
  //         finish: "Grey Distress",
  //         size: "36 L X 18 D X 18 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/coffeeTable/fourth/one.jpeg",
  //           two: "../images/livingRoom/coffeeTable/fourth/two.jpeg",
  //           three: "../images/livingRoom/coffeeTable/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //     bookShelf: [
  //       {
  //         productCategory: "livingRoom",
  //         productType: "bookShelf",
  //         title: "Utiva Wooden Carved Book Shelf Display Unit (White Antique)",
  //         price: "41,581",
  //         finish: "White Antique",
  //         size: "40 L X 18 D X 75 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/bookShelf/first/one.jpeg",
  //           two: "../images/livingRoom/bookShelf/first/two.jpeg",
  //           three: "../images/livingRoom/bookShelf/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "bookShelf",
  //         title: "Prerak Wooden Wall Shelf Book Shelf (Honey)",
  //         price: "3,851",
  //         finish: "Honey",
  //         size: "34L X 6 D X 34 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/bookShelf/second/one.jpeg",
  //           two: "../images/livingRoom/bookShelf/second/two.jpeg",
  //           three: "../images/livingRoom/bookShelf/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "bookShelf",
  //         title: "Prima Wooden Carved Book Shelf (White Distress)",
  //         price: "43,981",
  //         finish: "White Distress",
  //         size: "36 L X 18 D X 78 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/bookShelf/third/one.jpeg",
  //           two: "../images/livingRoom/bookShelf/third/two.jpeg",
  //           three: "../images/livingRoom/bookShelf/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "livingRoom",
  //         productType: "bookShelf",
  //         title: "Fames Wooden Carved Book Shelf Display Rack (White Distress)",
  //         price: "47,851",
  //         finish: "White Distress",
  //         size: "40 L X 18 D X 75 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/livingRoom/bookShelf/fourth/one.jpeg",
  //           two: "../images/livingRoom/bookShelf/fourth/two.jpeg",
  //           three: "../images/livingRoom/bookShelf/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //   },
  //   bedRoom: {
  //     cupBoard: [
  //       {
  //         productCategory: "bedRoom",
  //         productType: "cupBoard",
  //         title: "Radha Krishna Wooden Handpainted Cupboard Almirah",
  //         price: "32,541",
  //         finish: "Handpainted",
  //         size: "30 L X 18 D X 66 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/cupBoard/first/one.jpeg",
  //           two: "../images/bedRoom/cupBoard/first/two.jpeg",
  //           three: "../images/bedRoom/cupBoard/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "cupBoard",
  //         title: "Raja Rani Wooden Handpainted Cupboard",
  //         price: "36,214",
  //         finish: "Handpainted",
  //         size: "30 L X 18 D X 66 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/cupBoard/second/one.jpeg",
  //           two: "../images/bedRoom/cupBoard/second/two.jpeg",
  //           three: "../images/bedRoom/cupBoard/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "cupBoard",
  //         title: "Eight Wooden Designer Cupboard (Walnut)",
  //         price: "38,961",
  //         finish: "Walnut",
  //         size: "36 L X 18 D X 50 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/cupBoard/third/one.jpeg",
  //           two: "../images/bedRoom/cupBoard/third/two.jpeg",
  //           three: "../images/bedRoom/cupBoard/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "cupBoard",
  //         title:
  //           "Guler Wooden Rattan Cupboard with Drawers in Distress Finish (Rustic)",
  //         price: "44,981",
  //         finish: "Rustic",
  //         size: "32 L X 16 D X 66 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/cupBoard/fourth/one.jpeg",
  //           two: "../images/bedRoom/cupBoard/fourth/two.jpeg",
  //           three: "../images/bedRoom/cupBoard/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //     mirrorFrame: [
  //       {
  //         productCategory: "bedRoom",
  //         productType: "mirrorFrame",
  //         title: "Kani Wooden Mirror Frame (White Distress)",
  //         price: "21,651",
  //         finish: "White Distress",
  //         size: "L 60 X H 36",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/mirrorFrame/first/one.jpeg",
  //           two: "../images/bedRoom/mirrorFrame/first/two.jpeg",
  //           three: "../images/bedRoom/mirrorFrame/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "mirrorFrame",
  //         title: "Jharo Two Arch Wooden Carved Mirror Frame (White Distress)",
  //         price: "17,261",
  //         finish: "White Distress",
  //         size: "L 39 X 36 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/mirrorFrame/second/one.jpeg",
  //           two: "../images/bedRoom/mirrorFrame/second/two.jpeg",
  //           three: "../images/bedRoom/mirrorFrame/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "mirrorFrame",
  //         title: "Bia Wooden Carved Mirror Frame (Light Blue Distress)",
  //         price: "19,818",
  //         finish: "Light Blue Distress",
  //         size: " L 36 X H 60",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/mirrorFrame/third/one.jpeg",
  //           two: "../images/bedRoom/mirrorFrame/third/two.jpeg",
  //           three: "../images/bedRoom/mirrorFrame/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "mirrorFrame",
  //         title: "Ania Wooden Mirror Frame (White Distress)",
  //         price: "19,217",
  //         finish: "White Distress",
  //         size: "L 36 X H 60",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/mirrorFrame/fourth/one.jpeg",
  //           two: "../images/bedRoom/mirrorFrame/fourth/two.jpeg",
  //           three: "../images/bedRoom/mirrorFrame/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //     dressingTable: [
  //       {
  //         productCategory: "bedRoom",
  //         productType: "dressingTable",
  //         title: "Eistha Wooden Carved Dressing Table Set with Mirror (Grey)",
  //         price: "78,951",
  //         finish: "Grey",
  //         size: "104 L X 16 D X 36 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/dressingTable/first/one.jpeg",
  //           two: "../images/bedRoom/dressingTable/first/two.jpeg",
  //           three: "../images/bedRoom/dressingTable/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "dressingTable",
  //         title: "Haken Wooden Dressing Table with Mirror (Walnut)",
  //         price: "37,851",
  //         finish: "Walnut",
  //         size: "32 L X 18 D X 72 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/bedRoom/dressingTable/second/one.jpeg",
  //           two: "../images/bedRoom/dressingTable/second/two.jpeg",
  //           three: "../images/bedRoom/dressingTable/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "dressingTable",
  //         title:
  //           "Eupera Wooden Dressing Table with Mirror Frame (White Distress)",
  //         price: "43,981",
  //         finish: "White Distress",
  //         size: "Cabinet :38 L X 16 D X 46 H Mirror : H 3.5 X L 2.5 Feet",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/dressingTable/third/one.jpeg",
  //           two: "../images/bedRoom/dressingTable/third/two.jpeg",
  //           three: "../images/bedRoom/dressingTable/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "dressingTable",
  //         title:
  //           "Lookea Large Size Solid Wood Dresser with Mirror (Natural Brown Distress)",
  //         price: "69,851",
  //         finish: "Natural Brown Distress",
  //         size: "Cabinet : 72 L X 16 D X 40 H Mirror : H 4 X L 3 Feet",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/dressingTable/fourth/one.jpeg",
  //           two: "../images/bedRoom/dressingTable/fourth/two.jpeg",
  //           three: "../images/bedRoom/dressingTable/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //     wardrobe: [
  //       {
  //         productCategory: "bedRoom",
  //         productType: "wardrobe",
  //         title: "Satie Wooden Wardrobe for Storage (Walnut Distress)",
  //         price: "35,981",
  //         finish: "Walnut",
  //         size: "36 L X 18 D X 75 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/wardrobe/first/one.jpeg",
  //           two: "../images/bedRoom/wardrobe/first/two.jpeg",
  //           three: "../images/bedRoom/wardrobe/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "wardrobe",
  //         title: "Dehra Wooden Wardrobe for Storage (Walnut)",
  //         price: "44,981",
  //         finish: "Walnut",
  //         size: "36 L X 21 D X 75 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/bedRoom/wardrobe/second/one.jpeg",
  //           two: "../images/bedRoom/wardrobe/second/two.jpeg",
  //           three: "../images/bedRoom/wardrobe/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "wardrobe",
  //         title:
  //           "Meuble Wooden Carved Storage Wardrobe Almirah (Off White Distress)",
  //         price: "43,994",
  //         finish: "Off White Distress",
  //         size: "38 L X 18 D X 75 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/wardrobe/third/one.jpeg",
  //           two: "../images/bedRoom/wardrobe/third/two.jpeg",
  //           three: "../images/bedRoom/wardrobe/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "bedRoom",
  //         productType: "wardrobe",
  //         title: "Denzil Wooden Carved Storage Wardrobe (White Distress)",
  //         price: "43,981",
  //         finish: "White Distress",
  //         size: "36 L X 18 D X 75 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/bedRoom/wardrobe/fourth/one.jpeg",
  //           two: "../images/bedRoom/wardrobe/fourth/two.jpeg",
  //           three: "../images/bedRoom/wardrobe/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //   },
  //   beds: {
  //     kingBed: [
  //       {
  //         productCategory: "beds",
  //         productType: "kingBed",
  //         title: "Radea Wooden Upholstered Fabric Bed (Antique Walnut)",
  //         price: "76,851",
  //         finish: "Antique Walnut",
  //         size: "King Size (6X6.5 Feet)",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/beds/kingBed/first/one.jpeg",
  //           two: "../images/beds/kingBed/first/two.jpeg",
  //           three: "../images/beds/kingBed/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "kingBed",
  //         title: "Umaid Wooden Designer Solid Wood Bed (Walnut)",
  //         price: "68,517",
  //         finish: "Walnut",
  //         size: "King Size",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/kingBed/second/one.jpeg",
  //           two: "../images/beds/kingBed/second/two.jpeg",
  //           three: "../images/beds/kingBed/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "kingBed",
  //         title: "Euren Wooden Storage Bed (Honey)",
  //         price: "52,981",
  //         finish: "Honey",
  //         size: "King Size",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/kingBed/third/one.jpeg",
  //           two: "../images/beds/kingBed/third/two.jpeg",
  //           three: "../images/beds/kingBed/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "kingBed",
  //         title: "Luxury Wooden Designer Bed (Walnut)",
  //         price: "67,981",
  //         finish: "Walnut",
  //         size: "King Size",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/kingBed/fourth/one.jpeg",
  //           two: "../images/beds/kingBed/fourth/two.jpeg",
  //           three: "../images/beds/kingBed/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //     queenBed: [
  //       {
  //         productCategory: "beds",
  //         productType: "queenBed",
  //         title: "Praja Wooden Carved Designer Bed (Antique Black)",
  //         price: "43,981",
  //         finish: "Black Antique",
  //         size: "Queen Size",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/beds/queenBed/first/one.jpeg",
  //           two: "../images/beds/queenBed/first/two.jpeg",
  //           three: "../images/beds/queenBed/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "queenBed",
  //         title: "Praja Wooden Carved Designer Bed (Antique White)",
  //         price: "40,000",
  //         finish: "Antique White",
  //         size: "Queen Size ( 6.5*5)",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/beds/queenBed/second/one.jpeg",
  //           two: "../images/beds/queenBed/second/two.jpeg",
  //           three: "../images/beds/queenBed/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "queenBed",
  //         title: "Praja Wooden Carved Designer Bed (Blue)",
  //         price: "43,981",
  //         finish: "Blue",
  //         size: "Queen Size",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/beds/queenBed/third/one.jpeg",
  //           two: "../images/beds/queenBed/third/two.jpeg",
  //           three: "../images/beds/queenBed/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "queenBed",
  //         title:
  //           "Esan Wooden Upholstered Fabric Upholstery Bed (Antique Walnut)",
  //         price: "61,981",
  //         finish: "Antique Walnut",
  //         size: "Queen Size",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/beds/queenBed/fourth/one.jpeg",
  //           two: "../images/beds/queenBed/fourth/two.jpeg",
  //           three: "../images/beds/queenBed/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //     singleBed: [
  //       {
  //         productCategory: "beds",
  //         productType: "singleBed",
  //         title: "Awan Wooden Solid Wood Single Bed (Teak Province)",
  //         price: "26,918",
  //         finish: "Teak Province",
  //         size: "Single Size (in inches) : 6.5X3 Feet",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/singleBed/first/one.jpeg",
  //           two: "../images/beds/singleBed/first/two.jpeg",
  //           three: "../images/beds/singleBed/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "singleBed",
  //         title: "Hagse Solid Wood Single Diwan Bed (Honey)",
  //         price: "24,981",
  //         finish: "Honey",
  //         size: "Single Size (in inches) : 6.5X3 Feet",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/singleBed/second/one.jpeg",
  //           two: "../images/beds/singleBed/second/two.jpeg",
  //           three: "../images/beds/singleBed/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "singleBed",
  //         title: "Sinva Solid Wood Upholstered Single Diwan Bed (Honey)",
  //         price: "27,981",
  //         finish: "Honey",
  //         size: "Single Size (in inches) : 6.5X3 Feet",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/singleBed/third/one.jpeg",
  //           two: "../images/beds/singleBed/third/two.jpeg",
  //           three: "../images/beds/singleBed/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "singleBed",
  //         title: "Salter Solid Wood Single Diwan Bed (Teak)",
  //         price: "25,981",
  //         finish: "Teak",
  //         size: "Single Size (in inches) : 6.5X3 Feet",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/singleBed/fourth/one.jpeg",
  //           two: "../images/beds/singleBed/fourth/two.jpeg",
  //           three: "../images/beds/singleBed/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //     doubleBed: [
  //       {
  //         productCategory: "beds",
  //         productType: "doubleBed",
  //         title: "Alvea Wooden Storage Bed With Drawers (Teak)",
  //         price: "47,891",
  //         finish: "Teak",
  //         size: "Double Size",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/doubleBed/first/one.jpeg",
  //           two: "../images/beds/doubleBed/first/two.jpeg",
  //           three: "../images/beds/doubleBed/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "doubleBed",
  //         title: "Azma Wooden Storage Bed (Light Brown)",
  //         price: "44,981",
  //         finish: "Light Brown",
  //         size: "Double Size",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/doubleBed/second/one.jpeg",
  //           two: "../images/beds/doubleBed/second/two.jpeg",
  //           three: "../images/beds/doubleBed/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "doubleBed",
  //         title: "Pamo Wooden Upholstered Bed (Antique Dark Brown)",
  //         price: "65,871",
  //         finish: "Antique Dark Brown",
  //         size: "Double Size",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/beds/doubleBed/third/one.jpeg",
  //           two: "../images/beds/doubleBed/third/two.jpeg",
  //           three: "../images/beds/doubleBed/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "beds",
  //         productType: "doubleBed",
  //         title: "Tuna Wooden Bed Without Storage (Teak)",
  //         price: "34,982",
  //         finish: "Teak",
  //         size: "Double Size",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/beds/doubleBed/fourth/one.jpeg",
  //           two: "../images/beds/doubleBed/fourth/two.jpeg",
  //           three: "../images/beds/doubleBed/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //   },
  //   study: {
  //     studyTable: [
  //       {
  //         productCategory: "study",
  //         productType: "studyTable",
  //         title: "Phino Wooden Study Table (Brown)",
  //         price: "27,981",
  //         finish: "Brown",
  //         size: "54 L X 24 D X 30 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/study/studyTable/first/one.jpeg",
  //           two: "../images/study/studyTable/first/two.jpeg",
  //           three: "../images/study/studyTable/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "study",
  //         productType: "studyTable",
  //         title: "Pino Wooden Study Table (Mahagony)",
  //         price: "42,981",
  //         finish: "Mahagony",
  //         size: "66 L X 24 D X 30 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/study/studyTable/second/one.jpeg",
  //           two: "../images/study/studyTable/second/two.jpeg",
  //           three: "../images/study/studyTable/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "study",
  //         productType: "studyTable",
  //         title: "Jihia Wooden Wrok Desk Study Table (Honey)",
  //         price: "25,961",
  //         finish: "Honey",
  //         size: "50 L X 21 D X 30 H",
  //         woodUsed: "Mango",
  //         images: {
  //           one: "../images/study/studyTable/third/one.jpeg",
  //           two: "../images/study/studyTable/third/two.jpeg",
  //           three: "../images/study/studyTable/third/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "study",
  //         productType: "studyTable",
  //         title: "Jemmy Sheesham Wood Study Table Office Desk (Walnut Expre)",
  //         price: "59,851",
  //         finish: "Walnut Expre",
  //         size: "70 L X 30 D X 30 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/study/studyTable/fourth/one.jpeg",
  //           two: "../images/study/studyTable/fourth/two.jpeg",
  //           three: "../images/study/studyTable/fourth/three.jpeg",
  //         },
  //       },
  //     ],
  //     studyChair: [
  //       {
  //         productCategory: "study",
  //         productType: "studyChair",
  //         title: "Chandigarh Wooden Rattan Chair (Teak)",
  //         price: "12,951",
  //         finish: "Teak",
  //         size: "19 L X 18 D X 32 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/study/studyChair/first/one.jpeg",
  //           two: "../images/study/studyChair/first/two.jpeg",
  //           three: "../images/study/studyChair/first/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "study",
  //         productType: "studyChair",
  //         title: "Parin Wooden Rattan Chair with Cushion (Black)",
  //         price: "9,951",
  //         finish: "Black",
  //         size: "18 L X 18 D X 32 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/study/studyChair/second/one.jpeg",
  //           two: "../images/study/studyChair/second/two.jpeg",
  //           three: "../images/study/studyChair/second/three.jpeg",
  //         },
  //       },
  //       {
  //         productCategory: "study",
  //         productType: "studyChair",
  //         title: "Tara Solid Wood Rattan Chair (Black)",
  //         price: "9,981",
  //         finish: "Black",
  //         size: "19 L X 22 D X 35 H",
  //         woodUsed: "Sheesham",
  //         images: {
  //           one: "../images/study/studyChair/third/one.jpeg",
  //           two: "../images/study/studyChair/third/two.jpeg",
  //           three: "../images/study/studyChair/third/three.jpeg",
  //         },
  //       },
  //     ],
  //   },
  // };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios
          .get("https://onlinefurniturestore-server.vercel.app/products")
          .then((res) => res.data)
          .catch((err) => console.log("error", err));
        if (response.message) {
          setProducts(response.products);
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [setProducts]);

  return (
    <div>
      <Header />
      {/* <Register /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/livingroom/sofa" element={<Sofa />} />
        <Route path="/livingroom/tvCabinet" element={<TvCabinet />} />
        <Route path="/livingroom/bookShelf" element={<BookShelf />} />
        <Route path="/livingroom/coffeeTable" element={<CoffeeTable />} />
        <Route path="/bedRoom/cupBoard" element={<CupBoard />} />
        <Route path="/bedRoom/mirrorFrame" element={<MirrorFrame />} />
        <Route path="/bedRoom/dressingTable" element={<DressingTable />} />
        <Route path="/bedRoom/wardrobe" element={<Wardrobe />} />
        <Route path="/beds/kingBed" element={<KingBed />} />
        <Route path="/beds/queenBed" element={<QueenBed />} />
        <Route path="/beds/singleBed" element={<SingleBed />} />
        <Route path="/beds/doubleBed" element={<DoubleBed />} />
        <Route path="/study/studyTable" element={<StudyTable />} />
        <Route path="/study/studyChair" element={<StudyChair />} />
        <Route
          path="/:productCategory/:productType/:title"
          element={<ProductDetails />}
        />
        {/* <Route path="/:title" element={<ProductDetails />} /> */}
        <Route path="/:username/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<SearchProducts />} />
        {/* <Route path="/mycart" element={<MyCart />}>
        </Route> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordercomplete" element={<OrderComplete />} />
        <Route
          path="/order-placed-successfully"
          element={<OrderPlacedSuccessfully />}
        />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
    </div>
  );
};

export default App;
