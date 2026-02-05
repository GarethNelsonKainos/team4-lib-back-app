import { Router, Request, Response } from "express";

const router = Router();

router.get("/members", async (req: Request, res: Response) => {
  res.status(200).json({ data: [] });
});

router.post("/members", async (req: Request, res: Response) => {
  const { member_id, member_name } = req.body;
  if (!member_id || !member_name) {
    res.status(400).json({ message: "member_id and member_name are required" });
    return;
  }
  res.status(201).json({ data: req.body });
});

router.get("/members/:memberPkId", async (req: Request, res: Response) => {
  const memberPkId = Number.parseInt(req.params.memberPkId[0], 10);
  if (Number.isNaN(memberPkId)) {
    res.status(400).json({ message: "memberPkId must be a number" });
    return;
  }
  res.status(200).json({ data: { member_pk_id: memberPkId } });
});

router.put("/members/:memberPkId", async (req: Request, res: Response) => {
  const memberPkId = Number.parseInt(req.params.memberPkId[0], 10);
  if (Number.isNaN(memberPkId)) {
    res.status(400).json({ message: "memberPkId must be a number" });
    return;
  }
  res.status(200).json({ data: { member_pk_id: memberPkId, ...req.body } });
});

router.delete("/members/:memberPkId", async (req: Request, res: Response) => {
  const memberPkId = Number.parseInt(req.params.memberPkId[0], 10);
  if (Number.isNaN(memberPkId)) {
    res.status(400).json({ message: "memberPkId must be a number" });
    return;
  }
  res.status(204).send();
});

router.get("/members/:memberPkId/borrowing-history", async (req: Request, res: Response) => {
  const memberPkId = Number.parseInt(req.params.memberPkId[0], 10);
  if (Number.isNaN(memberPkId)) {
    res.status(400).json({ message: "memberPkId must be a number" });
    return;
  }
  res.status(200).json({ data: [], member_pk_id: memberPkId });
});

router.get("/members/:memberPkId/current-borrows", async (req: Request, res: Response) => {
  const memberPkId = Number.parseInt(req.params.memberPkId[0], 10);
  if (Number.isNaN(memberPkId)) {
    res.status(400).json({ message: "memberPkId must be a number" });
    return;
  }
  res.status(200).json({
    data: [],
    member_pk_id: memberPkId,
    due_date: null,
    is_overdue: false,
  });
});

export default router;
