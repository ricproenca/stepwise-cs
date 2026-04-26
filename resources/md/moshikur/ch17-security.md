# Chapter 17: Security

Source: https://moshikur.com/a2-level/17-security/

---

## Encryption

Converting plaintext to ciphertext to prevent unauthorised access.

### Symmetric Key Cryptography

Uses a **single shared key** for both encryption and decryption.
- Faster processing
- Requires secure key distribution (key must be shared beforehand)

### Asymmetric Key Cryptography

Uses a **public/private key pair**:
- **Public key** — encrypts data; shared openly
- **Private key** — decrypts data; kept secret

Enables secure communication without prior key sharing.

| Feature | Symmetric | Asymmetric |
|---|---|---|
| Keys | Single shared key | Public + private key pair |
| Speed | Faster | Slower |
| Key distribution | Must be shared securely | Public key shared openly |
| Use case | Bulk data encryption | Key exchange, digital signatures |

### Quantum Cryptography

Leverages quantum mechanics principles:
- Measuring a quantum particle changes its state
- Eavesdropping is detectable through photon polarisation methods
- Provides theoretically unbreakable encryption

---

## SSL / TLS

**SSL (Secure Sockets Layer)** and **TLS (Transport Layer Security)** secure client-server communication.

**Handshake process:**
1. Client requests a secure connection (HTTPS)
2. Server sends its digital certificate
3. Client verifies the certificate with the Certificate Authority
4. Both parties exchange and agree on encryption keys
5. Encrypted session established

**Applications:** e-commerce, banking, email, API communications.

---

## Digital Certificates

Electronic documents that prove the identity of a server or organisation.

### Certificate Authorities (CAs)

A **Certificate Authority** is a trusted third party that issues and validates certificates.

- CA verifies identity before issuing a certificate
- Certificate contents: owner's public key, organisation details, CA's digital signature, expiry date

**Uses:**
- Prevent impersonation attacks
- Ensure message authenticity and integrity
- Enable trusted HTTPS connections
