import {Collection, ObjectId} from "mongodb";

export interface Listing{
    _id:ObjectId;
    title:string;
    image:string;
    address:string;
    price:number;
    numOfGuests: number;
    numOfBeds: number;
    numOfBaths: number;
    rating:number;
}

export interface Database{
    listings:Collection<Listing>;
}

export interface listingInput{
    title:string;
    image:string;
    address:string;
    price:number;
    numOfGuests: number;
    numOfBeds: number;
    numOfBaths: number;
    rating:number;
}

export interface listingUpdateInput{
    id:string;
    title:string;
    image:string;
    address:string;
    price:number;
    numOfGuests: number;
    numOfBeds: number;
    numOfBaths: number;
    rating:number;
}

export interface listingArgs{
    input: listingInput;
}

export interface listingUpdateArgs{
    UpdateInput: listingUpdateInput;
}
