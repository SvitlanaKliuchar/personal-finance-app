import express, { Request, Response } from "express"
import FinancialRecordModel from "@src/schema/fin-record"

const router = express.Router()

router.get('/getAllByUserId:userId', async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const records = await FinancialRecordModel.find({userId: userId })
        if (records.length === 0) {
            return res.status(404).send("No records found for this user")
        }
        res.status(200).send(records)
    } catch (err) {
        res.status(500).send(err)
    }
})

export default router

//define a route