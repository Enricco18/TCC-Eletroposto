import { Router } from 'express';

const router = new Router();

router.get("", (req, res) => {
    res.status(200).json({ helloWorld: "Olá, TCC!" });
})

router.post("/", (req, res) => {
    const reqBody = req.body;
    console.log(reqBody);
    res.status(200).json(reqBody);
})

export default router;