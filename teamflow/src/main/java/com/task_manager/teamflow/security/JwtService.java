package com.task_manager.teamflow.security;

import com.task_manager.teamflow.user.Token;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

@Service
public class JwtService {

    private long jwtExpiration=8640000;
    private String secretKey = "9HwQ2vT5uN8sZkRqL7yPfBvXxAeYqUw1KdOmBgVtRnYxHsLdPqCmZtXaEbNr5UgZ3";

    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(HashMap<String, Object> claims, UserDetails userDetails ){

        return buildToken(claims, userDetails, jwtExpiration);
    }

    private String buildToken(HashMap<String, Object> extraClaims, UserDetails userDetails, long jwtExpiration) {
        var authorities=userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .map(auth -> auth.startsWith("ROLE_") ? auth : "ROLE_" + auth)
                .toList();
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+jwtExpiration))
                .claim("authorities", authorities)
                .signWith(getSignInKey())
                .compact();
    }

    private Key getSignInKey() {

        byte[] keyBytes= Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);

    }

    public boolean isTokenValid(String token,UserDetails userDetails){
        final String username=extractUsername(token);
        return (username.equals(userDetails.getUsername())&& !isTokenExpired(token));
    }




    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public<T> T extractClaim(String token, Function<Claims,T> claimResolver) {
        final Claims claims=extractAllClaims(token);
        return claimResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

    }

}
