import express from 'express'; // Express.js framework-u
import cors from 'cors'; // CORS siyasətini idarə etmək üçün
import cookieParser from 'cookie-parser'; // Cookie-ləri oxumaq üçün
import morgan from 'morgan'; // HTTP sorğularını log etmək üçün
import helmet from 'helmet'; // Təhlükəsizlik üçün HTTP başlıqlarını dəyişmək üçün
import dotenv from 'dotenv'; // Ətraf mühit dəyişənlərini yükləmək üçün

dotenv.config(); // .env faylındakı dəyişənləri process.env-ə yükləyir

const PORT = process.env.PORT || 8080; // Portu ətraf mühitdən və ya 8080-dən götürür
const app = express(); // Express tətbiqi yaradılır

// CORS-u aktiv edir, təhlükəsiz cross-origin əlaqə üçün parametrlər təyin edir
app.use(cors({
    credentials: true, // Cookie və digər auth məlumatlarının cross-origin sorğularında göndərilməsinə icazə verir
    origin: process.env.FRONTEND_URL // Yalnız .env-də göstərilən frontend URL-dən gələn sorğulara icazə verir
})); 

app.use(express.json()); // JSON formatında gələn sorğuları avtomatik parse edir
app.use(cookieParser()); // Cookie-ləri oxuyur və req.cookies obyektinə əlavə edir
app.use(morgan()); // HTTP sorğularını log edir (standart formatda)

// Helmet təhlükəsizlik başlıqlarını əlavə edir, bəzi resursların başqa domenlərdən istifadə olunmasına icazə verir
app.use(helmet({
    crossOriginResourcePolicy: false // Helmet-in Cross-Origin-Resource-Policy başlığını deaktiv edir, resursların başqa domenlərdən istifadə olunmasına imkan verir
})); 

// Serveri göstərilən portda işə salır və konsola mesaj yazır
app.listen(PORT, ()=> {
    console.log(`SERVER IS RUNNING IN ${PORT}`)
});
