import { Options } from "../../Hooks/useFetch/types";
import {
  CommentPostProps,
  PasswordLostProps,
  PasswordResetProps,
  PhotosDeleteProps,
  PhotosGetProps,
  PhotosPostProps,
  TokenPostProps,
  UserPostProps,
} from "./types";

export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body: TokenPostProps) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_GET(token: string) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(body: UserPostProps) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST({ formData, token }: PhotosPostProps) {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({ page, total, user }: PhotosGetProps) {
  const options: Options = {
    method: "GET",
    cache: "no-store",
  };

  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: options,
  };
}

export function PHOTO_GET(id: number): { url: string; options: Options } {
  const options: Options = {
    method: "GET",
    cache: "no-store",
  };

  return {
    url: `${API_URL}/api/photo/${id}`,
    options: options,
  };
}

export function COMMENT_POST({ id, comment, token }: CommentPostProps) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ comment }),
    },
  };
}

export function PHOTO_DELETE({ id, token }: PhotosDeleteProps) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function PASSWORD_LOST(body: PasswordLostProps) {
  return {
    url: API_URL + "/api/password/lost",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body: PasswordResetProps) {
  return {
    url: API_URL + "/api/password/reset",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function STATS_GET(token: string | null) {
  return {
    url: API_URL + "/api/stats",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
