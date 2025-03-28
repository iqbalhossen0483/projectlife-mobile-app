import AsyncStorage from "@react-native-async-storage/async-storage";

type options = { header: boolean };

class HTTP_REQUEST {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseUrl = process.env.EXPO_PUBLIC_API_URL || "";
    this.headers = {
      "Content-Type": "application/json",
      authorization: "",
    };
    this.initializeHeaders();
  }
  async initializeHeaders() {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      this.headers["authorization"] = token;
    }
  }

  async post(
    end_point: string,
    payload: object,
    options?: options
  ): Promise<any> {
    try {
      const headers = options?.header === false ? undefined : this.headers;
      const response = await fetch(this.baseUrl + end_point, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async get(end_point: string): Promise<any> {
    try {
      const response = await fetch(this.baseUrl + end_point, {
        method: "GET",
        headers: this.headers,
      });

      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async put(
    end_point: string,
    payload: object,
    options?: options
  ): Promise<any> {
    try {
      const headers = options?.header === false ? undefined : this.headers;
      const response = await fetch(this.baseUrl + end_point, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async patch(
    end_point: string,
    payload: object,
    options?: options
  ): Promise<any> {
    try {
      const headers = options?.header === false ? undefined : this.headers;
      const response = await fetch(this.baseUrl + end_point, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(end_point: string, options?: options): Promise<any> {
    try {
      const headers = options?.header === false ? undefined : this.headers;
      const response = await fetch(this.baseUrl + end_point, {
        method: "DELETE",
        headers: headers,
      });

      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

const http = new HTTP_REQUEST();

export default http;
