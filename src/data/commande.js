const dataCommades = [
  {
    idCommande: 456,
    dateCommande: "2023-11-15",
    client: {
      nom: "John Doe",
      email: "john.doe@example.com",
      numeroTelephone: "0576120238",
    },
    lieuLivraison: "123 Rue de la Livraison, Ville",
    methodePaiement: "Carte de crédit",
    montantTotalProduits: 3000,
    montantLivraison: 500,
    montantTotal: 3500,
    statutCommande: 0,
    produitsCommandes: [
      {
        idProduit: "PRD001",
        nomProduit: "Produit 1",
        photoProduit: "https://via.placeholder.com/150",
        prixProduit: 1000,
        quantiteCommandee: 2,
        sousTotal: 2000,
      },
      {
        idProduit: "PRD002",
        nomProduit: "Produit 2",
        photoProduit: "https://via.placeholder.com/150",
        prixProduit: 800,
        quantiteCommandee: 1,
        sousTotal: 800,
      },
      {
        idProduit: "PRD003",
        nomProduit: "Produit 3",
        photoProduit: "https://via.placeholder.com/150",
        prixProduit: "1200 XOF",
        quantiteCommandee: 3,
        sousTotal: 3600,
      },
      // ... ajoutez autant d'articles que nécessaire
    ],
  },
  {
    idCommande: 455,
    dateCommande: "2023-11-15",
    client: {
      nom: "John Doe",
      email: "john.doe@example.com",
      numeroTelephone: "0758024250",
    },
    lieuLivraison: "123 Rue de la Livraison, Ville",
    methodePaiement: "Carte de crédit",
    montantTotalProduits: 3000,
    montantLivraison: 500,
    montantTotal: 3500,
    statutCommande: 2,
    produitsCommandes: [
      {
        idProduit: "PRD001",
        nomProduit: "Produit 1",
        photoProduit: "https://via.placeholder.com/150",
        prixProduit: 1000,
        quantiteCommandee: 2,
        sousTotal: 2000,
      },
      {
        idProduit: "PRD002",
        nomProduit: "Produit 2",
        photoProduit: "https://via.placeholder.com/150",
        prixProduit: 800,
        quantiteCommandee: 1,
        sousTotal: 800,
      },
      {
        idProduit: "PRD003",
        nomProduit: "Produit 3",
        photoProduit: "https://via.placeholder.com/150",
        prixProduit: "1200 XOF",
        quantiteCommandee: 3,
        sousTotal: 3600,
      },
      // ... ajoutez autant d'articles que nécessaire
    ],
  },
];


export default dataCommades;