import React from "react";

export type StoreFn = () => Store;

export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  hospital_name: string;
  email: string;
  image?: string;
  dob: string;
  sex: "male" | "female";
  profession: "doctor" | "nurse";
  city: string;
  address: string;
  mobile: string;
  country_code: string;
  status: "active" | "inactive";
  emailVerified: boolean;
  auth_type: "email" | "mobile";
  role: "user" | "admin";
  createdAt: string;
}

export interface ToastMessage {
  type: "success" | "failed" | null;
  message: string | null;
  icon?: React.ReactNode;
  onFinished?: () => void;
}

export interface Store {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  toastMessage: ToastMessage;
  setToastMessage: React.Dispatch<React.SetStateAction<ToastMessage>>;
  userLoading: boolean;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
