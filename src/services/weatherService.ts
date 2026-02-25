import { WeatherData } from '@/types/weather';
import axios from 'axios';

export type WeatherResult = { success: true; data: WeatherData } | { success: false; error: string };

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        appid: API_KEY,
        q: '',
        lang: 'pt_br',
        units: 'metric',
    },
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

const getErrorMessage = (statusCode: number): string => {
    switch (statusCode) {
        case 400:
            return "Requisição inválida";

        case 401:
            return "Chave de acesso inválida";

        case 404:
            return "Cidade não encontrada";

        case 429:
            return "Muitas requisições. Tente novamente mais tarde.";

        case 500:
            return "Erro interno do servidor.";

        case 502:
            return "Servidor temporariamente indisponível.";

        case 503:
            return "Serviço indisponível no momento.";

        default:
            return "Erro inesperado ao buscar dados do clima.";
    }
};

export const getCurrentWeather = async (cityName: string): Promise<WeatherResult> => {
    try {
        const trimmedCity = cityName.trim();
        if (!trimmedCity) {
            return { success: false, error: 'Cidade não informada.' };
        }

        const response = await api.get<WeatherData>('/weather', {
            params: {
                q: trimmedCity,
            },
        });

        return { success: true, data: response.data };
    } catch (err) {

        if(axios.isAxiosError(err)){
            if(err.response){
                return {
                    success: false,
                    error: getErrorMessage(err.response.status)
                }
            } else if(err.request){
                return {
                    success: false,
                    error: "Sem conexao com o servidor, tente novamente"
                }
            } else {
                return {
                    success: false,
                    error: "Erro ao buscar clima, tente novamente mais tarde"
                }
            }
        }

        return { success: false, error: 'Erro ao buscar dados do clima.' };
    }
}

export const getWeatherIcon = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}