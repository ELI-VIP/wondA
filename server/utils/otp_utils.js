import express from 'express';
import Resend from 'resend';
import dotenv from 'dotenv';
dotenv.config();

export const resend = new Resend(process.env.RESEND_API_KEY);

export const generateOTP = (length = 6) => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

