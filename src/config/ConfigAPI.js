export const base_url = 'http://10.14.107.5:8091/jlos/';
export const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJudnZhbmgxIiwiaWF0IjoxNjg5NjcwNDY0LCJleHAiOjE2ODk2ODg0NjR9.4VoZV2OZfHOAOusRiVY4afeU7yfX7CLhbYI4uTs6cnIjhFhWH9xUfKHOFmhiyO3Gn0-yD5A1WAy2wPCa5svOgw";
export const headers = {
    token: token,
    Authorization: `Bearer ${token}`,
}

// cong viec cua toi
export const gettaskall = 'task/all';