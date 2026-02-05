import { Router, Request, Response } from "express";

const router = Router();

router.get("/borrows", async (_req: Request, res: Response) => {
  res.status(200).json({ data: [] });
});

router.post("/borrows", async (req: Request, res: Response) => {
  res.status(201).json({ data: req.body });
});

router.get("/borrows/:borrowId", async (req: Request, res: Response) => {
  const borrowId = Number.parseInt(req.params.borrowId[0], 10);
  if (Number.isNaN(borrowId)) {
    res.status(400).json({ message: "borrowId must be a number" });
    return;
  }
  res.status(200).json({ data: { borrow_id: borrowId } });
});

router.put("/borrows/:borrowId", async (req: Request, res: Response) => {
  const borrowId = Number.parseInt(req.params.borrowId[0], 10);
  if (Number.isNaN(borrowId)) {
    res.status(400).json({ message: "borrowId must be a number" });
    return;
  }
  res.status(200).json({ data: { borrow_id: borrowId, ...req.body } });
});

router.delete("/borrows/:borrowId", async (req: Request, res: Response) => {
  const borrowId = Number.parseInt(req.params.borrowId[0], 10);
  if (Number.isNaN(borrowId)) {
    res.status(400).json({ message: "borrowId must be a number" });
    return;
  }
  res.status(204).send();
});

export default router;
