

//Authentication
export type registerUserDataType={
   username:string,
   password:string,
   email:string
}

export type verifyEmailType={
    verifyCode:string,
    username:string|undefined
}
export type loginUserDataType={
    creator:string,
    password:string
}


// User Type

export type userType={
    _id:string,
    isVerified:boolean,
    username:string,
    email:string,
    createdAt: string,
    updatedAt: string,
    __v: number
  }
  export type UserContextType = {
    user: userType;
    isAuthenticated: boolean;
    setUser: React.Dispatch<React.SetStateAction<userType>>;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  };

// product type
export type productType = {
    productImage:string,
    hoverImage:string,
    productName :string,
    category:string,
    price:number,
    rating:number,
}
