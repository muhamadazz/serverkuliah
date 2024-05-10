import networkx as nx

# Membuat graf dengan 6 node
G = nx.Graph()

# Menambahkan 6 node dan membuat hubungan antara mereka
G.add_nodes_from([1, 2, 3, 4, 5, 6])
G.add_edges_from([(1, 2), (1, 3), (1, 4), (1, 5), (1, 6),
                  (2, 3), (2, 4), (2, 5), (2, 6),
                  (3, 4), (3, 5), (3, 6),
                  (4, 5), (4, 6),
                  (5, 6)])

# Mengecek apakah graf memiliki sirkuit Hamiltonian
if nx.is_hamiltonian(G):
    print("Graf memiliki sirkuit Hamiltonian.")
else:
    print("Graf tidak memiliki sirkuit Hamiltonian.")
