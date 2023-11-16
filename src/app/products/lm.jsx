import React from 'react';

// Composant LettreDeMotivation
const LettreDeMotivation = ({ nom, adresse, ville, email, telephone }) => {
  return (
    <div>
      <p>À l'attention du responsable du recrutement,</p>
      <p>Je me permets de vous adresser ma candidature pour le poste de développeur Next.js / Nuxt.js au sein de votre agence.</p>
      <p>Passionné par le développement web et particulièrement par les technologies JavaScript, j'ai acquis une solide expérience en travaillant avec React et Vue.js. L'utilisation de Next.js et Nuxt.js, pour optimiser les performances et le SEO des applications web, est pour moi une pratique quotidienne.</p>
      <p>Ma capacité à travailler en équipe, ma curiosité pour les nouvelles technologies et mon engagement à fournir un code de qualité font de moi le candidat idéal pour rejoindre votre équipe.</p>
      <p>Je suis très enthousiaste à l'idée de pouvoir apporter ma contribution à des projets innovants et de travailler au sein d'une équipe dynamique et créative.</p>
      <p>Je reste à votre disposition pour tout complément d'information et suis disponible pour un entretien à votre convenance.</p>
      <p>Vous trouverez ci-joint mon curriculum vitae.</p>
      <p>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</p>
      <p>${nom}</p>
      <p>${adresse}</p>
      <p>${ville}</p>
      <p>${email}</p>
      <p>${telephone}</p>
    </div>
  );
};

// Utilisation du composant avec des props exemple
const App = () => {
  const nom = "Hardy Valentin";
  const adresse = "";
  const ville = "Lille";
  const email = "hardy.valpro@gmail.com";
  const telephone = "+33768310289";

  return (
    <div>
      <LettreDeMotivation 
        nom={nom} 
        adresse={adresse} 
        ville={ville} 
        email={email} 
        telephone={telephone} 
      />
    </div>
  );
}

export default App;
