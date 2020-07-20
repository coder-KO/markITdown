import React from 'react'
import EmojiButton from '@joeattardi/emoji-button';

export default function EmojiPicker() {
  const button = document.querySelector('#emoji-button');
  const picker = new EmojiButton();
  
  picker.on('emoji', emoji => {
    document.querySelector('input').value += emoji;
  });
  
  button.addEventListener('click', () => {
    picker.togglePicker(button);
  });
  
  return (
    <div>
      <picker />
    </div>
  )
}



