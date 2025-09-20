import { Request, Response } from "express";


export class TicketController {


  constructor() {
  }

  public getTickets = async (req: Request, res: Response) => {

    res.json('Get Tickets');

  }

  public getLastTicketNumber = async (req: Request, res: Response) => {

    res.json('Get Last Ticket Number'); 
  }

  public pendingTickets = async (req: Request, res: Response) => {

    res.json('Get Pending Tickets'); 
  } 

  public createTicket = async (req: Request, res: Response) => {

    res.json('Create Ticket'); 
  }

  public drawTicket = async (req: Request, res: Response) => {  

    res.json('Draw Ticket');
  }

  public ticketFinished = async (req: Request, res: Response) => {

    res.json('Ticket Finished');
  }

  public workingOn = async (req: Request, res: Response) => {

    res.json('Working On');
  }
}