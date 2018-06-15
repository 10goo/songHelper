import { Injectable } from '@angular/core';
import { Slide } from './slide';

const mock = [
  [
    {
      chords: ['C', 'C', 'G', 'Am', 'E', 'F', 'C', 'G', 'Em'],
      lyrics: `I catch the paper boy \n
      But things don't really change \n
      I'm standing in the wind \n
      But I never wave bye-bye \n
      But I try, I try...`,
      duration: 5000
    },
    {
      chords: ['C', 'C', 'G', 'Am', 'E', 'F', 'C', 'G', 'Em'],
      lyrics: `There's no sign of life \n
      It's just the power to charm \n
      I'm lying in the rain \n
      But I never wave bye-bye \n
      But I try, I try...`,
      duration: 2000
    },
    {
      chords: ['C', 'C', 'G', 'Am', 'E', 'F', 'C', 'G', 'Em'],
      lyrics: `It's not really work \n
      It's just the power to charm \n
      Still standing in the wind \n
      But I never wave bye-bye \n
      But I try, I try...`,
      duration: 10000
    }
  ]
]

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  getSong(): Slide[] {
    return mock[0];
  }
}
