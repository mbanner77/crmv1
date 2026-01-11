"use client";

import React from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  tags: string[];
  activities: string[];
}

interface ContactListProps {
  contacts: Contact[];
  onSelect: (contact: Contact) => void;
}

export function ContactList({ contacts, onSelect }: ContactListProps) {
  return (
    <div>
      <h2 className="text-xl">Kundenübersicht</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} onClick={() => onSelect(contact)} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
}