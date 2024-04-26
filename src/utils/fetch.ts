class Fetch<R> {
    protected base(url: string, data?: any, options?: RequestInit): Promise<R> {
      void url;
      void data;
      void options;
      throw Error("not implemented");
    }
  
    GET(url: string, options: RequestInit = {}): Promise<R> {
      return this.base(url, null, options);
    }
  
    POST(url: string, data: any, options: RequestInit = {}): Promise<R> {
      return this.base(url, data, {
        ...options,
        method: "POST",
      });
    }
  
    PATCH(url: string, data: any, options: RequestInit = {}): Promise<R> {
      return this.base(url, data, {
        ...options,
        method: "PATCH",
      });
    }
  
    DELETE(url: string, data: any = null, options: RequestInit = {}): Promise<R> {
      return this.base(url, data, {
        ...options,
        method: "DELETE",
      });
    }
  }
  
  export default Fetch;
  