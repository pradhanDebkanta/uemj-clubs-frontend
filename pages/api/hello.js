// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // console.log(process.env.GOOGLE_AUTH_CLIENT_ID, 'dkkkkkkkkk server');
  res.status(200).json({ name: 'John Doe' })
}
