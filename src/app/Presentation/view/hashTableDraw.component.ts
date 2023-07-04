// import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import {HashtableController} from "../controller/HashTableController";
// @Component({
//   selector: 'app-table',
//   template: '<canvas #canvas></canvas>',
//   styleUrls: ['./hashTableDraw.component.css']
// })
// export class HashTableDrawComponent  implements AfterViewInit {
//
//
//   @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;
//   private ctx!: CanvasRenderingContext2D|null;
//   controller:HashtableController=new HashtableController();
//   // model:Table=new Table(3);
//   ngAfterViewInit(): void {
//     const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
//     this.ctx = canvas.getContext('2d');
//     this.resizeCanvas(canvas);
//     this.drawTable();
//   }
//   resizeCanvas(canvas: HTMLCanvasElement): void {
//     const cellWidth = 80;
//     const cellHeight = 80;
//     const numRows = this.controller.getModel().getSize();
//     const tableWidth = cellWidth;
//     const tableHeight = numRows * cellHeight;
//     canvas.width = tableWidth;
//     canvas.height = tableHeight;
//   }
//   drawTable(): void {
//     const cellWidth = 80;
//     const cellHeight = 80;
//     const numRows = this.controller.getModel().getSize();
//     const tableWidth = cellWidth;
//     const tableHeight = numRows * cellHeight;
//
//
//     for (let i = 0; i < numRows; i++) {
//       const x = 0;
//       const y = i * cellHeight;
//       this.drawCell(x, y, cellWidth, cellHeight);
//     }
//
//     this.ctx!.strokeRect(0, 0, tableWidth, tableHeight);
//   }
//
//
//   drawCell(x: number, y: number, width: number, height: number): void {
//     this.ctx!.strokeStyle = 'black';
//     this.ctx!.fillStyle = 'white';
//     this.ctx!.lineWidth = 2;
//
//     this.ctx!.fillRect(x, y, width, height);
//     this.ctx!.strokeRect(x, y, width, height);
//   }
//
// }
