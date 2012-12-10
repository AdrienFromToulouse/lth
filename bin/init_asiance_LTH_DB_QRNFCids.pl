#!/usr/bin/perl
use strict;
use warnings;
use Digest::MD5 qw(md5_hex);


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Define the arrays for latitude and longitude values
#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

my @latitudes = ();
my @longitudes = ();

push(@latitudes, '37.56260725815746'); 
push(@latitudes, '37.51540530491637'); 
push(@latitudes, '37.561527164085206'); 
push(@latitudes, '37.51696091697719'); 
push(@latitudes, '37.50839954290128'); 
push(@latitudes, '37.50859018453681'); 
push(@latitudes, '37.55387250545642'); 
push(@latitudes, '37.5211101918867'); 
push(@latitudes, '37.52562681861596'); 

push(@longitudes, '126.98461748242191');
push(@longitudes, '126.90774980621485');
push(@longitudes, '127.037408496219');
push(@longitudes, '126.90322056927874');
push(@longitudes, '127.05979931149508');
push(@longitudes, '126.888827777347');
push(@longitudes, '126.92276192108154');
push(@longitudes, '127.02297997871399');
push(@longitudes, '126.92564679272459');

my $latitudesSize = @latitudes;

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Write bash script initliazing the DB of QRcode and NFC IDs
#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

open(IDFILE, '>createIDs.sh') || die "Can't open the file\n";

print IDFILE << "MyLabel";
#!/bin/sh
#This script initializes the LTH DB with QR and NFC IDs.

# Rm the previous ones
mongo asiance_LTH --eval 'db.qrnfc.remove({})'

# Init
MyLabel

    for (my $count = 0 ; $count < $latitudesSize ; $count++) {

	my $source = $latitudes[$count]."_".$longitudes[$count];

	my $code = md5_hex($source);

	print IDFILE << "MyLabel";
	mongo asiance_LTH --eval 'db.qrnfc.save({
    
    type: "qrcode",
    location: "",
    code: "$code"
})'
MyLabel

}

close(IDFILE);


# Change rights and execute the script bash
my $filename = "createIDs.sh";
chmod 0775, $filename or die "Couldn't chmod $filename: $!";
system("/bin/bash ./createIDs.sh");

if($? == -1){
    print "failed to execute: $!\n";
}


# Remove the script bash
unlink($filename) or warn "Could not unlink $filename: $!";
