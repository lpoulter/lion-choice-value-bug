import React from 'react';
import { createComponent } from '@lit-labs/react';
import { LionForm as WC } from '@lion/form';

customElements.define('lion-form', WC);

export const LionForm = createComponent(
  React,
  'lion-form',
  WC,
);
