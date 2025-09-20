
import { Server } from 'http';
import { WebSocket, WebSocketServer } from 'ws';

interface Options {
  server: Server;
  path?: string; // Optional path for WebSocket connections
}

export class WssService {

  private static _instance: WssService;

  private wss: WebSocketServer;

  private constructor(options: Options) {
    const { server, path = '/ws' } = options;
    this.wss = new WebSocketServer({ server, path });

    this.start();
  }

  static initWss(options: Options) {
    WssService._instance = new WssService(options);
  }

  static getInstance(): WssService {
    if (!WssService._instance) {
      throw 'WssService not initialized. Call initWss first.';
    }
    return WssService._instance;
  }

  public start() {
    this.wss.on('connection', (ws: WebSocket) => {
      console.log('New WebSocket connection established.');


      ws.on('close', () => console.log('WebSocket connection closed.'));

    });
  }

}