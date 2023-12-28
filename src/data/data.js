const data = {
   
    "cooperatives": [
      {
        "id": 1,
        "nom": "Coopérative A",
        "lieu": "Ville A",
        "numeroTelephone": "123456789",
        "representant": {
          "nom": "John Doe",
          "role": "Président",
          "email": "john.doe@example.com",
          "numero": "987654321"
        },
        "nombreMembres": 50,
        "typeProduit": ["Légumes", "Fruits"],
        "image": "lien_vers_l_image",
        "produits": [
          {
            "id": 1,
            "type": "Légumes",
            "stockEnKg": 1000,
            "revenue": 5000,
            "stockEcoule": 800,
            "impaye": 200,
            "nouvelleReception": false
          },
          {
            "id": 2,
            "type": "Fruits",
            "stockEnKg": 800,
            "revenue": 3000,
            "stockEcoule": 600,
            "impaye": 200,
            "nouvelleReception": true
          }
        ]
      },
      {
        "id": 2,
        "nom": "Coopérative B",
        "lieu": "Ville B",
        "numeroTelephone": "987654321",
        "representant": {
          "nom": "Jane Doe",
          "role": "Secrétaire",
          "email": "jane.doe@example.com",
          "numero": "123456789"
        },
        "nombreMembres": 30,
        "typeProduit": ["Céréales"],
        "image": "lien_vers_l_image",
        "produits": [
          {
            "id": 1,
            "type": "Céréales",
            "stockEnKg": 500,
            "revenue": 2000,
            "stockEcoule": 400,
            "impaye": 100,
            "nouvelleReception": false
          }
        ]
      }
    ]
  }

export default data  
 